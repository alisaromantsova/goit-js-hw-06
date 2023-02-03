function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxes = document.querySelector("div#boxes");
const input = document.querySelector("#controls input");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");

let startSize = 20;
const onAddButton = (amount) => {
  const arrey = [];

  for (let i = 0; i <= amount; i++) {
    const div = document.createElement("div");
    startSize += 10;
    div.style.height = startSize + "px";
    div.style.width = startSize + "px";
    div.style.backgroundColor = getRandomHexColor();
    arrey.push(div);
  }
  boxes.append(...arrey);
};

createButton.addEventListener("click", () => onAddButton(input.value));
destroyButton.addEventListener("click", () => (boxes.innerHTML = ""));
