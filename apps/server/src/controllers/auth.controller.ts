import { createToken } from "../middlewares/auth.middleware";
import User from "../models/user.model";

const signin = async (req, res, next) => {
  const {
    email,
    password
  } = req.body;

  if (!email || !password) {
    res.status(400).send({
      code: 400,
      message: 'Email or password is not empty'
    });
    return;
  };
  const user = await User.findOne({
    email
  });

  if (!user) {
    res.status(400).send({
      code: 400,
      message: 'Can Not Find This Email !!!'
    });
    return;
  }
  if (!user.authenticate(password)) {
    res.status(400).send({
      code: 400,
      message: 'Password is not correct'
    });
    return;
  }
  const token = createToken(user);

  res.status(200).send({
    code: 200,
    message: 'Login Success !!!',
    token: token,
    user: user
  })
}

const signup = async (req, res, next) => {
  const {
    full_name,
    email,
    password,
    confirm_password
  } = req.body;
  if (
    !full_name ||
    !email ||
    !password ||
    !confirm_password
  ) {
    res.status(400).send({
      code: 400,
      message: 'Enter all field !!!'
    })
    return;
  }
  if (password !== confirm_password) {
    res.status(400).send({
      code: 400,
      message: 'Password and Confirm Password not same !!!'
    })
    return;
  }
  const user = await User.findOne({
    email
  });
  if (user) {
    res.status(400).send({
      code: 400,
      message: 'The Email was registered !!!'
    })
    return;
  };
  const userNew = await User.create({
    full_name,
    email,
    password,
    photo: '/image/avatar-1.png'
  });
  res.status(200).send({
    code: 200,
    message: 'Registered Success !!!',
  });
}

export { signin, signup }