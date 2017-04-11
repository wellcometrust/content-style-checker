const toString = require('nlcst-to-string');
const regex = /[0-9]\s-\s[0-9]/;

module.exports = (node, file) => {
  const sentence = toString(node).toLowerCase();

  if (regex.test(sentence)) {
    const message = file.warn(
      `You shouldn't use spaces around a dash`,
      { start: node.position.start, end: node.position.end }
    );
    message.reason = '';
  }
};
