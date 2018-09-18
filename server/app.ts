import 'reflect-metadata';
import Koa from 'koa';
import json from 'koa-json';
import passport from 'koa-passport';

import accessLog from './middlewares/accessLog';
import helmet from './middlewares/helmet';
import cors from './middlewares/cors';
import error from './middlewares/error';
import serve from './middlewares/serve';
import bodyParser from './middlewares/bodyParser';
import responseTime from './middlewares/responseTime';
import traceLog from './middlewares/traceLog';
import { createRouter } from './router';

import { localStrategy } from './libs/localStrategy';
import { jwtStrategy } from './libs/jwtStrategy';
import { User } from './entities/users';

import { useKoaServer } from 'routing-controllers';
import { Connection } from 'typeorm';

export const createApp = (conn: Connection) => {
  const userRepository = conn.getRepository(User);
  passport.use(localStrategy(userRepository));
  passport.use(jwtStrategy());

  const app: any = new Koa();
  useKoaServer(app, {
    routePrefix: '/api',
    controllers: [__dirname + '/controllers/*.ts'],
  });
  app.context.db = conn;

  app.use(accessLog);
  app.use(helmet);
  app.use(cors);
  app.use(error);
  app.use(serve);
  app.use(bodyParser);
  app.use(json());
  app.use(traceLog);
  app.use(responseTime);

  const router = createRouter();
  app.use(router.routes());
  app.use(router.allowedMethods());

  return app;
};
