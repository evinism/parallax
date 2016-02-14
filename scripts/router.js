// router.js
// builds and configures the router (with configuration)
configure = require('../config/routes');
var Router = require('koa-router');
var router = Router();
configure(router);
module.exports = router;
