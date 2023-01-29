const counter = {
  counterValue: document.querySelector('#value'),
  decrement: document.querySelector('[data-action="decrement"]'),
  increment: document.querySelector('[data-action="increment"]')
};

counter.increment.addEventListener('click', () => {
  counter.counterValue.textContent++;
});

counter.decrement.addEventListener('click', () => {
  counter.counterValue.textContent--;
});
