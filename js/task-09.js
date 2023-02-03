function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// console.log(randomColor);

const button = document.querySelector("button.change-color");
const span = document.querySelector("span.color");

const onButtonClick = () => {
  const randomColor = getRandomHexColor();
  span.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
};
button.addEventListener("click", onButtonClick);
