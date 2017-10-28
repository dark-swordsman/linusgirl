const express = require('express');
const app = express();

var config = require('./config')(process.env.NODE_ENV);
var appPort = process.env.PORT || config.port;

app.use('/', express.static('./src'));

app.listen(appPort, function(){
  console.log('Linus is being a valley girl on ' + appPort);
});