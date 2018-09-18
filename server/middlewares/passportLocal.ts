import passport from 'passport';

const localAuth = passport.authenticate('local', { session: false });

export default localAuth;
