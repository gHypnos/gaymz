import Server from './networking/server'
import Socket from './networking/socket'
import { Config } from '../config'

/**
 * Author: Hypnos (Layne Balsters)
 */

console.clear();

async function init(): Promise<void> {
  try {
    await new Server(Config.port)

    await new Socket(Config.wsPort)

  } catch (err) {
    console.log(err)
  }
}

init();