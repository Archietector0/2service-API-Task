import { Sequelize } from "sequelize";
import { DB_DIALECT, DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from "../../config";

class DataBase {
  private _connection: any;

  constructor() {
    this._connect();
  }

  private _connect = () => {
    this._connection = new Sequelize(`${DB_DIALECT}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`);
    this._connection.sync()
  };

  public getConn = () => {
    return this._connection;
  };
}

export const dataBase = new DataBase();
