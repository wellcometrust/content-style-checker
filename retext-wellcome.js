const visit = require('unist-util-visit');
const checkSubstitutions = require('./check-substitutions.js');
const checkAvoids = require('./check-avoids.js');
const toString = require('nlcst-to-string');

const sentenceVisitor = file => node => {
  const sentence = toString(node);
  checkSubstitutions(file)(node);
  checkAvoids(file)(node);
};

const transformer = (tree, file) => {
  if (tree.type === 'RootNode') {
    // the tree is not a HTML tree
    visit(tree, 'SentenceNode', sentenceVisitor(file));
  }
  else {
    // for some reason rehype2retext duplicates the last ParagraphNode
    // hacky hack
    tree.children.slice(0,-1).forEach(c => visit(c, 'SentenceNode', sentenceVisitor(file)))
  }

};

module.exports = () => transformer;
