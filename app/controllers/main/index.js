function* handleRequest(next){
  this.body = '<!doctype html><head><script src="assets/bundle.js"></script></head>Main!';
};

module.exports = handleRequest;
