import { ApiError } from "../exceptions/api.error";
import { StorageRecordService } from "../services/storageRecord.service";
import { Request, Response, NextFunction } from "express";

export class StorageRecordController {
  private _storageRecordService: StorageRecordService;

  constructor() {
    this._storageRecordService = new StorageRecordService();
  }

  public getStorage = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const response = await this._storageRecordService.getStorage();
      res.send(response);
      res.status(200);
    } catch (error: any) {
      next(error);
    }
  };

  public getStorageByIdPage = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { uuid, page } = req.params;
      const pageSize = 3;

      if (Number(page) <= 0) {
        return next(
          ApiError.BadRequest({
            message: `Invalid page parameter value - [${page}]`,
          })
        );
      }

      const response = await this._storageRecordService.getStorageByUuid(uuid);

      const startIndex = (Number(page) - 1) * pageSize;
      const endIndex = startIndex + pageSize;

      res.send(response.slice(startIndex, endIndex));
      res.status(200);
    } catch (error: any) {
      next(error);
    }
  };
}
