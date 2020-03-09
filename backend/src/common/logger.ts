import * as moment from 'moment';

export default class Logger {

  public static time = moment().format('DD-MM-YY HH:IIa')

  public static gaymz = "[" + moment().format('DD-MM-YY hh:mma') + "]" + "[GAYMZ]"


  public static log(message: string): void {
    console.log(this.gaymz + ' ' + message);
  }

  public static imp(message: string): void {
    console.log(this.gaymz + '[IMPORTANT] ' + message);
  }

  public static error(message: string): void {
    console.log(this.gaymz + '[ERROR] ' + message);
  }

  public static user(message: string): void {
    console.log(this.gaymz + '[USER]' + message);
  }
}