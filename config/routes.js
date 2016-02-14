var c = require('../app/controllers');

function configureRouter(router){
  router.all('login', '/login', c.login);
  router.all('api', '/api', c.api);
  router.all('main', '/', c.main);
}

module.exports = configureRouter;
