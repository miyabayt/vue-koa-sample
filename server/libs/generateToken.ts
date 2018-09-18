import { sign } from 'jsonwebtoken';
import * as config from 'config';

const genTokenAsync = (payload) =>
  new Promise((resolve, reject) => {
    const appConfig: any = config.get('app');
    sign(payload, appConfig.jwt.secret, (err, encoded) => {
      if (err) {
        return reject(err);
      }
      resolve(encoded);
    });
  });

export default async function generateToken({ uuid, roles }) {
  const exp = Math.floor(Date.now() / 1000) + 60 * 60;
  const token = await genTokenAsync({ uuid, roles, exp });
  return { token, exp };
}
