(function() {
  const input = document.getElementById('check-text-input');
  const output = document.getElementById('check-text-output');
  const button = document.getElementById('check-text-btn');

  const chuck = new Image();
  chuck.src = 'https://media.giphy.com/media/2dJ5Iait4QrW8/giphy.gif';

  const writeMessage = output => msg => {
    const wrapper = document.createElement('li');
    wrapper.innerHTML = `
      <h3>${msg.message}</h3><br />
      ${msg.reason}
      <em> (${msg.source || ''})</em><br />
      \n
    `;
    output.appendChild(wrapper);
  };

  const checkText = async (input, output) => {
    if (input.value === '') return output.innerText = 'Gimme some text, my friend.';

    const data = JSON.stringify({ title: '', body: `<div>${input.value}</div>` });

    const headers = new Headers({ 'Content-Type': 'application/json' });

    const response = await fetch('/check', { method: 'post', body: data, headers });
    const messages = await response.json();

    output.innerHTML = '';
    if (messages.length) {
      messages.forEach(writeMessage(output));
    } else {
      output.appendChild(chuck);
    }
  };

  button.addEventListener('click', e => e.preventDefault() ^ checkText(input, output));
})();
