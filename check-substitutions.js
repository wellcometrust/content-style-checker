const fs = require('fs');
const toString = require('nlcst-to-string');

const substitutions = fs.readFileSync('./substitutions.csv', 'utf8')
  .split('\n')
  .map(pair => {
    const parts = pair.split(', ');
    return { from: parts[0], to: parts[1] };
  })
  .slice(0, -1);

const checkSubstitutions = file => node => {
  const word = toString(node).toLowerCase();
  const sub = substitutions.find(s => s.from === word);

  if (sub) {
    const message = file.warn(
      `Word choice`,
      { start: node.position.start, end: node.position.end }
    );

    message.reason = `Try using '${sub.to}' instead of '${word}'`;
  }
}

module.exports = checkSubstitutions;
