import { ApiError } from "../exceptions/api.error";
import { Request, Response, NextFunction } from "express";


function logger(err: any, req: Request, res: Response, next: NextFunction) {
  console.log(err);
  return err instanceof ApiError
    ? res.status(err.getStatus()).json({ message: err.message, errors: err.getErrors() })
    : res.status(500).json({ message: `[Undefined behavior] ${err.message}` });
}

export default logger;
