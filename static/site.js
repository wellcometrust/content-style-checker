(function() {
  const input = document.getElementById('check-text-input');
  const output = document.getElementById('check-text-output');
  const button = document.getElementById('check-text-btn');

  const writeMessage = output => msg => {
    output.innerText += `${msg.name}: ${msg.message} – ${msg.reason}\n\n`;
  };

  const checkText = async (input, output) => {

    const data = JSON.stringify({ title: '', body: `<div>${input.value}</div>` });

    const headers = new Headers({ 'Content-Type': 'application/json' });

    const response = await fetch('/check', { method: 'post', body: data, headers });
    const messages = await response.json();

    output.innerText = '';
    if (messages instanceof Array) messages.forEach(writeMessage(output));
  };

  button.addEventListener('click', e => e.preventDefault() ^ checkText(input, output));
})();
