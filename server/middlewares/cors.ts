import cors from '@koa/cors';

export default cors({
  allowMethods: ['GET', 'HEAD', 'PUT', 'POST', 'DELETE', 'PATCH'],
});
