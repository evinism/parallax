console.log("Parallax: Initializing server");

const koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('koa-router')();
const logger = require('koa-logger');
const redisStore = require('koa-redis');
const session = require('koa-generic-session');
const staticServer = require('koa-static');
const passport = require('koa-passport');
const mongoose = require('mongoose');

const db_configure = require('../config/dbconfig.json');
const secrets = require('../config/secrets.json');
const configure_routes = require('../config/routes');
const configure_passport = require('../config/passport');

// TODO: make this all promise-y

console.log("Parallax: Connecting to db")
mongoose.connect(`mongodb://${db_configure.user}:${secrets.mongo_pw}@${db_configure.host}/${db_configure.dbname}`);
var db = mongoose.connection;

db.on('error', function(){
  console.error('Parallax: Mongo error');
});
db.once('open', function() {
  console.log("Parallax: Successfully connected to Mongo instance");
});

console.log("Parallax: Configuring passport");
configure_passport(passport, db);

console.log("Parallax: Configuring routes");
configure_routes(router, passport);

var app = koa();

app.keys = [secrets.redis_key];
app.use(logger())
   .use(bodyParser())
   .use(session({ store: redisStore() }))
   .use(staticServer('public'))
   .use(passport.initialize())
   .use(passport.session())
   .use(router.routes());

function run(){
  app.listen(3000);
  console.log("Listening on port 3000");
}

run();
