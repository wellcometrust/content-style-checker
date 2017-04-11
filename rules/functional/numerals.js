const toString = require('nlcst-to-string');
const createWarningContext = require('../../create-warning-context.js');

const badOrdinalsList = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '100th', '1000th', '1000000th'];

const rules = [
  {
    condition: s => s.match(/^[0-9]/),
    message: 'Try to avoid beginning sentences with numerals.',
    reason: 'Either rephrase so that the sentence begins with something else or spell out the number.'
  },
  {
    condition: s => s.match(/\s[0-9]\s/),
    message: 'Spell out numbers of ten and below as words',
    reason: ''
  },
  {
    condition: s => s.match(/[0]{6,}/),
    message: 'Unless you need to be exact, spell out million and billion.',
    reason: 'You can use decimal points for a bit more precision, if needed'
  },
  {
    condition: s => s.match(/[0-9]{5,}/), // doing 10k+ for now because of years
    message: 'Use commas in numbers of 1,000 and greater.',
    reason: ''
  },
  {
    condition: s => badOrdinalsList.filter(o => s.includes(o)).pop(),
    message: 'Spell out ordinals between 1-10 and big ones such as hundredth, millionth',
    reason: ''
  }
];


const checkRule = (rule, node, file) => {
  const sentence = toString(node).toLowerCase();

  const match = rule.condition(sentence);

  if (match) {
    const message = file.warn(
      rule.message,
      { start: node.position.start, end: node.position.end }
    );

    message.source = createWarningContext(match, sentence);
    message.reason = rule.reason;
  }
}

module.exports = (node, file) => rules.forEach(r => checkRule(r, node, file));
