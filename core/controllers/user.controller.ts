import { TChangeUserRecord, TUserRecord } from "core/types";
import { UserService } from "../services/user.service";
import { Request, Response } from "express";
import crypto from "crypto";
import { StorageRecordService } from "../services/storageRecord.service";

export class UserController {
  private _userService: UserService;
  private _storageRecordService: StorageRecordService;

  constructor() {
    this._userService = new UserService();
    this._storageRecordService = new StorageRecordService();
  }

  public createUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const { body } = req;

      const userRecord: TUserRecord = {
        uuid: crypto.randomUUID(),
        created_at: new Date(),
        user_uuid: crypto.randomUUID(),
        name: body.name,
        surname: body.surname,
        city: body.city,
        age: body.age,
      };

      await this._userService.createUser(userRecord);
      await this._storageRecordService.createRecord({
        action: "CREATE",
        recordInfo: {
          user_uuid: userRecord.user_uuid,
          name: userRecord.name,
          surname: userRecord.surname,
          city: userRecord.city,
          age: userRecord.age,
        },
      });
      res.send({ action: "CREATING", status: "SUCCESS" });
      res.status(200);
    } catch (e: any) {
      console.log(`[ERROR]: ${e.message}`);
    }
  };

  public changeUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const userRecordChanges: TChangeUserRecord = {
        created_at: new Date(),
        ...req.body,
      };

      Object.entries({ ...req.body }).length == 1
        ? res.send({ action: "CHANGING", status: "SUCCESS", desc: "Nothing will be change, empty object" })
        : res.send({ action: "CHANGING", status: "SUCCESS", desc: "" });

      await this._userService.changeUser(userRecordChanges);

      await this._storageRecordService.createRecord({
        action: "CHANGE",
        recordInfo: {
          user_uuid: userRecordChanges.user_uuid,
          name: userRecordChanges.name,
          surname: userRecordChanges.surname,
          city: userRecordChanges.city,
          age: userRecordChanges.age,
        },
      });

      res.status(200);
    } catch (e: any) {
      console.log(`[ERROR]: ${e.message}`);
    }
  };

  public getUserList = async (req: Request, res: Response): Promise<void> => {
    try {
      const response = await this._userService.getUserList();
      res.send(response);
      res.status(200);
    } catch (e: any) {
      console.log(`[ERROR]: ${e.message}`);
    }
  };
}
