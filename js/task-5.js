function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.body;
const button = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

const handleClick = event => {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  spanColor.style.color = randomColor;
  spanColor.textContent = randomColor;
};

button.addEventListener('click', handleClick);
