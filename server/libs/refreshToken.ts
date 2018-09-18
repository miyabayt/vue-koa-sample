import generateToken from './generateToken';

export default async function refreshToken(ctx) {
  ctx.body = await generateToken(ctx.state.user);
}
