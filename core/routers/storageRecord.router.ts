import { ROUTES } from "../constants";
import { StorageRecordController } from "../controllers/storageRecord.controller";
import { Router } from "express";

export class StorageRecordRouter {
  private _router: Router;
  private _storageRecordController: StorageRecordController;

  constructor() {
    this._router = Router();
    this._storageRecordController = new StorageRecordController();

    this._start();
  }

  private _start = () => {
    this._router.get(ROUTES.GET_STORAGE, this._storageRecordController.getStorage);

    this._router.get(ROUTES.GET_STORAGE_BY_UUID_AND_PAGE, this._storageRecordController.getStorageByIdPage);
  };

  public getRouter = () => {
    return this._router;
  };
}
