const toString = require('nlcst-to-string');
const createWarningContext = require('../../create-warning-context.js');
const regex = /[0-9]\s-\s[0-9]/;

module.exports = (node, file) => {
  const sentence = toString(node).toLowerCase();

  const match = sentence.match(regex);

  if (match) {
    const message = file.warn(
      `You shouldn't use spaces around a dash`,
      { start: node.position.start, end: node.position.end }
    );
    message.reason = '';
    message.source = createWarningContext(match[0], sentence);
  }
};
