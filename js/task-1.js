'use strict';

const itemsCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemsCategories.length}`);

itemsCategories.forEach(item => {
  console.log(`Category: ${item.querySelector('h2').textContent}`);
  console.log(`Elements: ${item.querySelectorAll('li').length}`);
});
