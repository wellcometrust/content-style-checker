const retext = require('retext');
const express = require('express');
const bodyParser = require('body-parser');

const wellcomeContent = require('./retext-wellcome.js');

const processor = retext()
.use(wellcomeContent);

const EXPRESS_PORT = 3333;

const app = express();
app.use(bodyParser.json());

app.post('/check', (req, res) => {
  processor.process(req.body.text, (err, file) => {
    if (err) res.status(500).send('500: Internal server error.');
    else res.json(file.messages);
  });
});

app.listen(EXPRESS_PORT, function () {
  console.log(`Serving on port ${EXPRESS_PORT}!`);
});
