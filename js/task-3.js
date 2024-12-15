const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
const handleInput = event => {
  output.textContent = event.target.value.trim() || 'Anonymous';
};
input.addEventListener('input', handleInput);
