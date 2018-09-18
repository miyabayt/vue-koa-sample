import { Context } from 'koa';
import generateToken from '../libs/generateToken';

export default async function authenticate(ctx: Context) {
  ctx.body = await generateToken(ctx.state.user);
}
