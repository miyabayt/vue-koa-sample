import { Config } from './config';

const defaultConfig: Config = {
  app: {
    log4js: {
      appenders: {
        console: {
          type: 'console',
          layout: {
            type: 'pattern',
            pattern:
              '[%d{yyyy-MM-dd hh:mm:ss.SSS}] [%p] [%X{X-Request-Id}] : %m',
          },
        },
      },
      categories: {
        default: {
          appenders: ['console'],
          level: 'debug',
        },
      },
    },
    jwt: {
      secret: 'secret',
    },
  },
};

export default defaultConfig;
