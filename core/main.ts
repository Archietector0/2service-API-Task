import { WebServer } from "./webServer/webServer";

// TODO: сделать DTO
// TODO: оформить все в гитхабе

class Main {
  private _webServer: WebServer;

  constructor() {
    this._webServer = new WebServer();


    this._start();
  }

  private _start = () => {};
}

new Main();
