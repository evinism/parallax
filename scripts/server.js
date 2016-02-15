console.log("Initializing server");

const koa = require('koa');
const logger = require('koa-logger');
const redisStore = require('koa-redis');
const session = require('koa-generic-session');
const staticServer = require('koa-static');
const passport = require('koa-passport')

const configure = require('../config/routes');
const router = require('koa-router')();
configure(router, passport);

var app = koa();

app.keys = ['development_secret_key_lol'];

app.use(logger())
   .use(session({ store: redisStore() }))
   .use(staticServer('public'))
   .use(passport.initialize())
   .use(passport.session())
   .use(router.routes());

app.listen(3000);
console.log("Listening on port 3000");
