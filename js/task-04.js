const span = document.querySelector("#value");
let counterValue = 0;

const onDecrement = () => {
  span.textContent = counterValue -= 1;
};
const onIncrement = () => {
  span.textContent = counterValue += 1;
};

const decrBtn = document.querySelector('button[data-action="decrement"]');
const incrBtn = document.querySelector('button[data-action="increment"]');

decrBtn.addEventListener("click", onDecrement);
incrBtn.addEventListener("click", onIncrement);
