import cors from "cors";
import { PORT } from "../../config";
import express from "express";
import { UserRouter } from "../router/user.router";
import { StorageRecordRouter } from "../router/storageRecord.router";
import bodyParser from "body-parser";

export class WebServer {
  private _app: express.Application;
  private _userRouter: express.Router;
  private _storageRecordRouter: express.Router;

  constructor() {
    this._app = express();
    this._userRouter = new UserRouter().getRouter();
    this._storageRecordRouter = new StorageRecordRouter().getRouter();

    this._start();
  }

  private _start = () => {
    try {
      this._app.use(express.json());
      this._app.use(bodyParser.json());
      this._app.use(cors());

      this._app.use("/api/user", this._userRouter);

      this._app.use("/api/storage", this._storageRecordRouter);

      this._app.listen(PORT, () => {
        console.log(`WebServer listening on port: ${PORT}...`);
      });
    } catch (e: any) {
      console.log(`[ERROR]: ${e.message}`);
    }
  };
}
