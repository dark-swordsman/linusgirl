const express = require('express');
const app = express();

app.use('/', express.static('./src'));

app.listen(8080, function(){
  console.log('Linus is being a valley girl on 8080');
});