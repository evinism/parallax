login = require('../app/login');
api = require('../app/api');
main = require('../app/main');

function configureRouter(router){
  router.all('login', '/login', login);
  router.all('api', '/api', api);
  router.all('main', '/', main);
}

module.exports = configureRouter;
