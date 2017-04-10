const unified = require('unified');
const retext = require('retext');
const parse = require('rehype-parse');
const rehype2retext = require('rehype-retext');
const stringify = require('rehype-stringify');
const wellcomeContent = require('./retext-wellcome.js');

const titleProcessor = retext().use(wellcomeContent);

const bodyProcessor = unified()
  .use(parse)
  .use(rehype2retext, retext()
    .use(wellcomeContent)
  )
  .use(stringify);

const processor = (req, res) => {
  titleProcessor.process(req.body.title, (err, file) => {
    if (err) {
      res.status(500).send('500: Internal server error.' + err);
    } else {
      console.log('processed title');
      bodyProcessor.process(req.body.body, (err, file) => {
        if (err) {
          res.status(500).send('500: Internal server error.' + err);
        } else {
          console.log('processed body');
          res.json(file.messages);
        }
      });
    }
  });
};

module.exports = processor;
