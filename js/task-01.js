const Counter = document.querySelector('#categories');

const element = Counter.querySelectorAll('.item');
console.log(`Number of categories:`, element.length);

console.log(`Category:`, element[0].firstElementChild.textContent);

const elements = document.querySelector('.animals');
console.log(`Elements:`, elements.children.length);

console.log(`Category:`, element[1].firstElementChild.textContent);

const products = document.querySelector(`.products`);
console.log(`Elements:`, products.children.length);

console.log(`Category:`, element[2].firstElementChild.textContent);

const languages = document.querySelector('.languages');
console.log(`Elements:`, languages.children.length);
