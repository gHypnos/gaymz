import * as WebSocket from 'ws'

/**
 * Author: Hypnos (Layne Balsters)
 */

export default class Socket {

  private _wss: WebSocket.Server;
  private _port: number;

  constructor(port: number) {
    this._port = port;
    this.listen();
  }

  private listen(): void {
    this._wss = new WebSocket.Server({ port: this._port });
    this._wss.on("connection", this.onConnection)
    console.log('hii')
  }

  private onConnection(socket: WebSocket.Data) {
    console.log(socket)
  }
}