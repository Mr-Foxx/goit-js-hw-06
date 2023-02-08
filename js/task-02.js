const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');
console.log(ingredientsList);

const elements = ingredients.map(el => {
  const ingredientsEement = document.createElement('li');
  ingredientsEement.textContent = el;
  ingredientsEement.classList.add('item')

  return ingredientsEement;
});

console.log(elements);
ingredientsList.append(...elements);