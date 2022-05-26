class AppError extends Error {
  public readonly message: string;
  public readonly statusCode: number;
  public readonly status: string;
  public readonly isOperational: boolean;

  constructor(message: string, statusCode: number) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? "Fails" : "Error";

    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError