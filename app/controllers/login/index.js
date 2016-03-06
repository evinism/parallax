const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Login = require('../../views/login');

function* handleGet(){
  var login = React.createElement(Login);
  this.body = '<!doctype html>' + ReactDOMServer.renderToStaticMarkup(login);
};

function* handlePost(){
  passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/login?success=false'
  });
}

module.exports = {get: handleGet, post: handlePost};
