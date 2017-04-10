const visit = require('unist-util-visit');
const checkSubstitutions = require('./check-substitutions.js');
const toString = require('nlcst-to-string');

const wordVisitor = file => node => {
  checkSubstitutions(file)(node);
};

const sentenceVisitor = file => node => {
  const sentence = toString(node);
  visit(node, 'WordNode', wordVisitor(file));
};

const transformer = (tree, file) => {
  visit(tree, 'SentenceNode', sentenceVisitor(file));
};

module.exports = () => transformer;
