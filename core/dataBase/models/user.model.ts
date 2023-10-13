import { DataTypes, Model } from "sequelize";
import { MODEL_NAMES } from "../constants";
import { dataBase } from "../dataBase";
import { StorageRecordModel } from "./storageRecord.model";

export interface UserModelAttributes {
  uuid: string;
  created_at: Date;
  name: string;
  user_uuid: string;
  surname: string;
  age: number;
  city: string;
}

export class UserModel extends Model<UserModelAttributes> implements UserModelAttributes {
  public uuid!: string;
  public created_at!: Date;
  public name!: string;
  public user_uuid!: string;
  public surname!: string;
  public age!: number;
  public city!: string;
}

UserModel.init(
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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: dataBase.getConn(),
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    tableName: MODEL_NAMES.USER,
  }
);

UserModel.hasMany(StorageRecordModel, { foreignKey: 'user_uuid'});
StorageRecordModel.belongsTo(UserModel, { foreignKey: 'user_uuid'});
