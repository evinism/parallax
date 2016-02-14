console.log("Initializing server");
const Koa = require('koa');
const Logger = require('koa-logger');
const session = require('koa-generic-session');
const Static = require('koa-static');

//const redisStore = require('koa-redis');
//const Passport = require('koa-passport');

const router = require('./router');

var app = Koa();
app.use(Logger())
   .use(Static('public'))
   .use(router.routes());

app.listen(3000);
console.log("Listening on port 3000");
