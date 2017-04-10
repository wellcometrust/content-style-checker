const retext = require('retext');
const express = require('express');
const bodyParser = require('body-parser');

const wellcomeContent = require('./retext-wellcome.js');

const processor = retext()
.use(wellcomeContent);

const app = express();
app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.json());

app.post('/check', (req, res) => {
  processor.process(req.body.text, (err, file) => {
    if (err) res.status(500).send('500: Internal server error.');
    else res.json(file.messages);
  });
});

app.listen(app.get('port'), function () {
  console.log(`Serving on port ${app.get('port')}!`);
});
