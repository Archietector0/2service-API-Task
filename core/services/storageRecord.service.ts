import { TRecordParams, TStorageRecord } from "../types";
import { StorageRecordModel } from "../dataBase/models/storageRecord.model";
import crypto from "crypto";

export class StorageRecordService {
  private _recordModel: typeof StorageRecordModel;

  constructor() {
    this._recordModel = StorageRecordModel;
  }

  public createRecord = async ({ action, recordInfo }: TRecordParams): Promise<void> => {
    const storageRecord: TStorageRecord = {
      uuid: crypto.randomUUID(),
      created_at: new Date(),
      user_uuid: recordInfo.user_uuid,
      action,
      changes_request: JSON.stringify(recordInfo),
    };

    await this._recordModel.create(storageRecord);
  };

  public getStorage = async (): Promise<StorageRecordModel[]> => {
    return await this._recordModel.findAll();
  };

  public getStorageByUuid = async (userUuid: string): Promise<StorageRecordModel[]> => {
    return await this._recordModel.findAll({ where: { user_uuid: userUuid } });
  };
}
