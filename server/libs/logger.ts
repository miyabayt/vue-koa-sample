import * as log4js from 'log4js';
import config from 'config';

let logger: log4js.Logger = null;

if (logger == null) {
  const appConfig: any = config.get('app');
  log4js.configure(appConfig.log4js);
  logger = log4js.getLogger('app');
}

export default logger;
