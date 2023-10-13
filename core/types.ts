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
  recordInfo: {
    user_uuid: string;
    name?: string;
    surname?: string;
    city?: string;
    age?: number;
  };
};

export type TStorageRecord = {
  uuid: string;
  created_at: Date;
  user_uuid: string;
  action: string;
  changes_request: string;
};
