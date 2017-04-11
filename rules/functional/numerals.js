const toString = require('nlcst-to-string');

const badOrdinals = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '100th', '1000th', '1000000th'];


module.exports = (node, file) => {
  const sentence = toString(node).toLowerCase();

  const foundOrdinals = badOrdinals.filter(o => sentence.includes(o));

  if (foundOrdinals.length) {
    const message = file.warn(
      `Spell out ordinals between 1-10 and big ones such as hundredth, millionth`,
      { start: node.position.start, end: node.position.end }
    );
    message.reason = '';
  }

};
