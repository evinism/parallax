var c = require('../app/controllers');

function configureRouter(router, passport){
  router.get('login', '/login', c.login);
  router.post('/auth/google', passport.authenticate('google', { successRedirect: '/', failureRedirect: '/login' }));
  router.all('api', '/api', c.api);
  router.all('main', '/', c.main);
}

module.exports = configureRouter;
