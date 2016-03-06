function* handleGet(next){
  this.body = "API!";
};

module.exports = {get: handleGet};
