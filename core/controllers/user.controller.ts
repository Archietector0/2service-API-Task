import { TChangeUserRecord, TUserRecord } from "core/types";
import { UserService } from "../services/user.service";
import { Request, Response, NextFunction } from "express";
import crypto from "crypto";
import { StorageRecordService } from "../services/storageRecord.service";
import { ApiError } from "../exceptions/api.error";
import { UserDTO } from "../dtos/user.dto";

export class UserController {
  private _userService: UserService;
  private _storageRecordService: StorageRecordService;

  constructor() {
    this._userService = new UserService();
    this._storageRecordService = new StorageRecordService();
  }

  public createUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { body } = req;

      if (!body.name || !body.surname || !body.city || !body.age) {
        const currentData = `name: ${body.name}, surname: ${body.surname}, city: ${body.city}, age: ${body.age}`;
        return next(
          ApiError.BadRequest({
            message: `Some of the required parameters are empty. Your data: [${currentData}]`,
          })
        );
      }

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
        recordInfo: new UserDTO(userRecord),
      });
      res.send({ status: "success", desc: "Actions were successfully completed" });
      res.status(200);
    } catch (error: any) {
      next(error);
    }
  };

  public changeUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      if (!req.body.user_uuid) {
        return next(
          ApiError.BadRequest({
            message: `Parameter user_uuid is not specified`,
          })
        );
      }

      const userRecordChanges: TChangeUserRecord = {
        created_at: new Date(),
        ...req.body,
      };

      const result = await this._userService.changeUser(userRecordChanges);
      if (!result[0]) {
        return next(
          ApiError.NotFound({
            message: `Requested user_uuid not found`,
          })
        );
      }

      await this._storageRecordService.createRecord({
        action: "CHANGE",
        recordInfo: new UserDTO(userRecordChanges),
      });

      res.send({ status: "success", desc: "Actions were successfully completed" });
      res.status(200);
    } catch (error: any) {
      next(error);
    }
  };

  public getUserList = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const response = await this._userService.getUserList();
      res.send(response);
      res.status(200);
    } catch (error: any) {
      next(error);
    }
  };
}
