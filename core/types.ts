import { UserDTO } from "./dtos/user.dto";

export type TUserRecord = {
  uuid: string;
  created_at: Date;
  name: string;
  user_uuid: string;
  surname: string;
  city: string;
  age: number;
};

export type TChangeUserRecord = {
  created_at: Date;
  user_uuid: string;
  name?: string;
  surname?: string;
  city?: string;
  age?: number;
};

export type TRecordParams = {
  action: "CREATE" | "CHANGE";
  recordInfo: UserDTO
};

export type TStorageRecord = {
  uuid: string;
  created_at: Date;
  user_uuid: string;
  action: string;
  changes_request: string;
};

export type ApiErrorArgs = {
  status: number;
  message: string;
  errors?: Array<string>;
};

export type ApiErrorBadReq = {
  message: string;
  errors?: Array<any>;
};
