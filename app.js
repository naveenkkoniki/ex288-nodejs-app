var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('jon eric add bin2!\n');
});

app.listen(8080, function() {
  console.log('Example port listening log');
});
