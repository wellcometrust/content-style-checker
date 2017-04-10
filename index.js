const express = require('express');
const bodyParser = require('body-parser');

const processor = require('./processor.js');

const app = express();
app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.json());

app.post('/check', processor);

app.listen(app.get('port'), function () {
  console.log(`Serving on port ${app.get('port')}!`);
});
