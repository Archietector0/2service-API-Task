import { WebServer } from "./webServer/webServer";

class Main {
  private _webServer: WebServer;

  constructor() {
    this._webServer = new WebServer();
  }
}

new Main();
