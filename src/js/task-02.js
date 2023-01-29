const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments'
];

const list = document.querySelector('#ingredients');

const elementsArray = [];

ingredients.map((option) => {
  const element = document.createElement('li');
  element.classList.add('item');
  element.textContent = option;
  elementsArray.push(element);
});
list.append(...elementsArray);
