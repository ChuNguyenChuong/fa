class AppError extends Error {
  public statusCode: string
  public status: string
  public isOperational: boolean
  constructor(message, statusCode) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? "Fails" : "Error";

    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}
export default AppError