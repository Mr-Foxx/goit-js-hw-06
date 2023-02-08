

const categoriesEl = document.querySelectorAll('#categories .item');
console.log(`Number of categories:${categoriesEl.length}`);

 categoriesEl.forEach(el => {
     const header = el.querySelector('h2').textContent;

     const elements = el.querySelectorAll('li').length;

     console.log(`Category: ${header}`);
     console.log(`Elements:${elements}`);
})
 