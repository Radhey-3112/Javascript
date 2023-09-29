// Calling JavaScript getElementsByClassName() on an element example
let menu = document.getElementById('menu');
let items = menu.getElementsByClassName('item');

let data = [].map.call(items, item => item.textContent);

console.log(data);

// Calling JavaScript getElementsByClassName() on the document example
let elements = document.getElementsByClassName('heading-secondary');

let dataA = [].map.call(elements, elem => elem.textContent);

console.log(dataA);