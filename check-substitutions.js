const fs = require('fs');
const toString = require('nlcst-to-string');

const substitutions = fs.readFileSync('./rules/substitutions.csv', 'utf8')
  .split('\n')
  .map(pair => {
    const parts = pair.split(', ');
    return { from: parts[0], to: parts[1] };
  })
  .filter(s => s.from && s.to);

const checkSubstitutions = file => node => {
  const sentence = toString(node).toLowerCase();

  const subs = substitutions.filter(s => sentence.includes(s.from));

  subs.forEach(sub => {
    const message = file.warn(
      `Word choice`,
      { start: node.position.start, end: node.position.end }
    );
    message.reason = `Try using '${sub.to}' instead of '${sub.from}'`;
  });
}

module.exports = checkSubstitutions;
