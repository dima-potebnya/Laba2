const express = require("express");
const appProxy = express();
const request = require('request')
const config = require('./proxy_convict.js');
const router = require('./proxy_routing.js')

appProxy.listen(config.get('port_proxy'));

appProxy.use('/', router);
