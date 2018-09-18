import Router from 'koa-router';

import localAuth from './middlewares/passportLocal';
import authenticate from './libs/authenticate';

import jwtAuth from './middlewares/passportJwt';
import refreshToken from './libs/refreshToken';

export const createRouter = () => {
  const router = new Router();

  // Local auth (username/password)
  router.post('/authenticate', localAuth, authenticate);

  // JWT protected
  router.get('/refresh-token', jwtAuth, refreshToken);

  return router;
};
