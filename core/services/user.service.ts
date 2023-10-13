import { TChangeUserRecord, TUserRecord } from "core/types";
import { UserModel } from "../dataBase/models/user.model";

export class UserService {
  private _userModel: typeof UserModel;

  constructor() {
    this._userModel = UserModel;
  }

  public createUser = async (userRecord: TUserRecord): Promise<void> => {
    await this._userModel.create(userRecord);
  };

  public changeUser = async (userRecordChanges: TChangeUserRecord) => {
    await this._userModel.update(userRecordChanges, { where: { user_uuid: userRecordChanges.user_uuid } });
  };

  public getUserList = async (): Promise<UserModel[]> => {
    return await this._userModel.findAll();
  };
}
