import { compare as compareHash } from 'bcrypt';
import { Strategy as LocalStrategy } from 'passport-local';
import { Repository } from 'typeorm';
import { User } from '../entites/User';

export const localStrategy = (userRepository: Repository<User>) =>
  new LocalStrategy(
    { session: false, usernameField: 'email' },
    async (email, password, done) => {
      try {
        const user = await userRepository.findOne({ email });
        if (await compareHash(password, user.password)) {
          done(null, { ...user, hashedPassword: undefined });
        } else {
          done(null, false);
        }
      } catch (err) {
        done(err);
      }
    }
  );
