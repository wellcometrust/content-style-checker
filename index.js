const express = require('express');
const bodyParser = require('body-parser');

const processor = require('./processor.js');

const app = express();
app.set('port', (process.env.PORT || 5000));
app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.static('static'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/check', processor);

app.listen(app.get('port'), function () {
  console.log(`Serving on port ${app.get('port')}!`);
});
