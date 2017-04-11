const createWarningContext = (match, sentence) => {
  const contextStart = sentence.indexOf(match) - 20;
  const contextEnd = sentence.indexOf(match) + match.length + 20;

  const fullContext = sentence.slice(contextStart, contextEnd);
  const context = [
    fullContext.slice(0, fullContext.indexOf(match)),
    '<strong>',
    match, ' ',
    '</strong>',
    fullContext.slice(fullContext.indexOf(match) + match.length + 1)
  ].join('');

  return `… ${context} …`;
}

module.exports = createWarningContext;
