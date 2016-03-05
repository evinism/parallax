const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Main = require('../../views/main');

function* handleRequest(next){
  var session = this.session;
  session.count = session.count || 0;
  session.count++;
  var main = React.createElement(Main, {session: session})
  this.body = '<!doctype html>' + ReactDOMServer.renderToStaticMarkup(main);
};

module.exports = handleRequest;
