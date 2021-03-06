const fs = require('fs');
const toString = require('nlcst-to-string');
const createWarningContext = require('./create-warning-context.js');

const avoids = fs.readFileSync('./rules/avoid.csv', 'utf8')
  .split('\n')
  .filter(a => a != '');

const checkAvoids = file => node => {
  const sentence = toString(node).toLowerCase();
  const avs = avoids.filter(s => sentence.includes(s));

  avs.forEach(sub => {
    const message = file.warn(
      `Word choice`,
      { start: node.position.start, end: node.position.end }
    );
    message.reason = `Avoid using '${sub}'`;
    message.source = createWarningContext(sub, sentence);
  });
}

module.exports = checkAvoids;
