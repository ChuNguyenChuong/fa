
import mongoose from "mongoose";
import crypto from "crypto";

const userSchema = new mongoose.Schema(
  {
    full_name: {
      type: String,
      required: true,
      index: true,
      lowercase: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      lowercase: true,
    },
    hashed_password: {
      type: String,
      required: true,
    },
    salt: {
      type: String,
    },
    about: {
      type: String,
    },
    role: {
      type: Number,
      default: 0,
    },
    photo: {
      type: String,
    },
    purchased_course: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course"
      }
    ],
  }, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});
userSchema.pre("save", function (next) {
  this.codeActive = Math.floor(Math.random() * (99999 - 10000) + 10000);
  next();
});
userSchema
  .virtual("user_name")
  .set(function (full_name) {
    this._user_name = full_name;
    this.user_name = this.makeUserName(full_name);
  })
  .get(function () {
    return this._user_name;
  });
userSchema
  .virtual("password")
  .set(function (password) {
    // create a temporary variable called _password
    this._password = password;
    // generate salt
    this.salt = this.makeSalt();
    // ecryptPassword
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });


userSchema.methods = {
  authenticate: function (plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },

  makeUserName: function (full_name) {
    const splitName = full_name.split(' ');
    const hoVaTenDem = splitName.reduce((first, last) => {
      first += last[0];
      return first;
    }, "");
    const userName = splitName[splitName.length - 1] + hoVaTenDem.slice(0, -1)
    return userName;
  },

  encryptPassword: function (password) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
    } catch (error) {
      return "";
    }
  },
  makeSalt: function () {
    return Math.round(new Date().valueOf() * Math.random()) + "";
  },
  createCodeActive: function () {
    return this.codeActive = Math.floor(Math.random() * (99999 - 10000) + 10000);
  },
};

// userSchema.pre(/^find/, function (next) {
//   this.populate({
//     path: "notifications",
//     select: '-__v',
//   });
//   next();
// })

// userSchema.virtual("notifications", {
//   ref: "notifications",
//   foreignField: "user",
//   localField: "_id"
// });

const User = mongoose.model("User", userSchema);

export default User