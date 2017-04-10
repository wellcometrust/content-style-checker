const visit = require('unist-util-visit');
const toString = require('nlcst-to-string');

const forbiddenWords = require('./forbidden-words.json');

const visitor = file => node => {
  const word = toString(node);

  if (forbiddenWords.includes(word)) {
    const message = file.warn(
      `Forbidden word`,
      { start: node.position.start, end: node.position.end }
    );

    message.reason = `Using the word '${word}'`;
  }
};

const transformer = (tree, file) => {
  visit(tree, 'WordNode', visitor(file));
};

module.exports = () => transformer;
