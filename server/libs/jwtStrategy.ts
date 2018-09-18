import {
  ExtractJwt,
  Strategy as JwtStrategy,
  StrategyOptions,
} from 'passport-jwt';
import config from 'config';

export const jwtStrategy = () => {
  const appConfig: any = config.get('app');
  const opts: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: appConfig.jwt.secret,
  };

  return new JwtStrategy(opts, ({ uuid, roles }, done) => {
    done(null, { uuid, roles });
  });
};
