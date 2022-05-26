import jwt from "jsonwebtoken"

type cookieOptions = {
  signed: boolean,
  httpOnly: boolean,
  secure?: boolean
}
const catchAsync = fn => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  }
}
const signToken = _id => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

const createToken = (user) => {
  const token = signToken(user._id);
  return token
}

export { catchAsync, createToken }