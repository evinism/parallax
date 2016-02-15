function* handleRequest(next){
  var session = this.session;
  session.count = session.count || 0;
  session.count++;
  this.body = '<!doctype html><head><script src="assets/bundle.js"></script></head>Main! count: '+ session.count;
};

module.exports = handleRequest;
