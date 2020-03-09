import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from "express";
import Logger from '../../common/logger';

/**
 * Author: Hypnos (Layne Balsters)
 */

export default class Server {

  private app: any;
  private readonly SERVER_STARTED = 'Gaymz API started: ';
  private _logo: any

  constructor(port: number) {
    this.app = express();
    this.app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

      next();
    });
    this.app.use(cors())
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(express.static(__dirname + '/public'));
    this.start(port);
    this._logo = 'uwu x3'
  }

  public start(port: number): void {
    this.app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
      return next();
    })
    this.app.listen(port, () => {
      console.log(this._logo)
      Logger.log(this.SERVER_STARTED + port);
    });
  }
}