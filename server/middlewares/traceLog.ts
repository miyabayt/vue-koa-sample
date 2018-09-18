import logger from '../libs/logger';
import xorshift from 'xorshift';

export default async (ctx, next) => {
  const requestId = ctx.request.get('X-Request-Id') || xorshift.randomint()[0];

  // レスポンスヘッダーにリクエストIDを出力する
  ctx.set('X-Request-Id', requestId);

  // log4jsのコンテキストにリクエストIDを設定する
  logger.addContext('X-Request-Id', requestId);

  await next();
};
