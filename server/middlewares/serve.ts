import { Middleware } from 'koa';
import serve from 'koa-static';
import path from 'path';

const serveMiddleware: Middleware = serve(path.join(__dirname, '/../public'));

export default serveMiddleware;
