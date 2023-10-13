import { StorageRecordService } from "../services/storageRecord.service";
import { Request, Response } from "express";

export class StorageRecordController {
  private _storageRecordService: StorageRecordService;

  constructor() {
    this._storageRecordService = new StorageRecordService();
  }

  public getStorage = async (req: Request, res: Response): Promise<void> => {
    try {
      const response = await this._storageRecordService.getStorage();
      res.send(response);
      res.status(200);
    } catch (e: any) {
      console.log(`[ERROR]: ${e.message}`);
    }
  };

  public getStorageById = async (req: Request, res: Response): Promise<void> => {
    try {
      const { uuid } = req.params;

      const response = await this._storageRecordService.getStorageByUuid(uuid);
      res.send(response);
      res.status(200);
    } catch (e: any) {
      console.log(`[ERROR]: ${e.message}`);
    }
  };
}
