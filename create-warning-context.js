const createWarningContext = (match, sentence) => {
  const contextStart = sentence.indexOf(match) - 12;
  const contextEnd = sentence.indexOf(match) + match.length + 12;
  return `… ${sentence.slice(contextStart, contextEnd)} …`;
}

module.exports = createWarningContext;
