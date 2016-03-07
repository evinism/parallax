"use strict"
var c = require('../app/controllers');

function configureRouter(router, passport){
  router.get('/login', c.login.get);
  router.get('/api', c.api.get);
  router.get('/', c.main.get);
  router.post('/create', c.create.post);


  // -- Authentication --
  router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/login');
  });

  router.post('/login',
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/failed'
    })
  );
}

module.exports = configureRouter;
