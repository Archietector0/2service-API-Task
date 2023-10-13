import { DataTypes, Model } from "sequelize";
import { MODEL_NAMES } from "../constants";
import { dataBase } from "../dataBase";

export interface StorageRecordModelAttributes {
  uuid: string;
  created_at: Date;
  user_uuid: string;
  action: string;
  changes_request: string;
}

export class StorageRecordModel extends Model<StorageRecordModelAttributes> implements StorageRecordModelAttributes {
  public uuid!: string;
  public created_at!: Date;
  public user_uuid!: string;
  public action!: string;
  public changes_request!: string;
}

StorageRecordModel.init(
  {
    uuid: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    user_uuid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    action: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    changes_request: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: dataBase.getConn(),
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    tableName: MODEL_NAMES.RECORDS,
  }
);
