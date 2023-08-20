import { NextFunction, Request, Response } from 'express';
import { HttpException } from '../utils/httpException';
import { HttpStatusCodes } from '../utils/constants';

export const ErrorMiddleware = (error: HttpException, req: Request, res: Response, next: NextFunction) => {
  try {
    const statusCode: number = error.statusCode || HttpStatusCodes.INTERNAL_SERVER_ERROR;
    const message: string = error.message || 'Internal Server Error';

    res.status(statusCode).json({ message });
  } catch (error) {
    next(error);
  }
};
