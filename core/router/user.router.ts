import { UserController } from "../controllers/user.controller";
import { ROUTES } from "../constants";
import { Router } from "express";

export class UserRouter {
  private _router: Router;
  private _userController: UserController;

  constructor() {
    this._router = Router();
    this._userController = new UserController();

    this._start();
  }

  private _start = () => {
    this._router.post(ROUTES.CREATE, this._userController.createUser);

    this._router.post(ROUTES.CHANGE, this._userController.changeUser);

    this._router.get(ROUTES.GET_USERS_LIST, this._userController.getUserList);
  };

  public getRouter = () => {
    return this._router;
  };
}
