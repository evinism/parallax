function configurePassport(passport, db){
  console.log("configuring passport:");
  var user = { id: 1, username: 'test' }
  passport.serializeUser(function(user, done) {
    console.log('serializing');
    done(null, user._id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      console.log('deserializing');
      done(err, user);
    });
  });
  var LocalStrategy = require('passport-local').Strategy;
  passport.use(new LocalStrategy( {
      usernameField: 'email',
      passwordField: 'password'
    },
    function(email, password, done) {
      // retrieve user ...
      console.log("Authenticating:");
      if (email === 'test' && password === 'test') {
        console.log("Authentication Success");
        done(null, user)
      } else {
        console.log("Authentication failure");
        done(null, false)
      }
    }
  ));
};

module.exports = configurePassport;
