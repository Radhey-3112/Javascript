let div = document.createElement('div');
div.id = 'content';
div.className = 'note';
//add text
 div.innerHTML = '<p>CreateElement example</p>';
 console.log(div.firstChild);
// or
// create a new text node and add it to the div


let text = document.createTextNode('CreateElement example');
div.appendChild(text);
console.log(div.childNodes);
document.body.appendChild(div);


// Creating new list items ( li) example
// select the ul menu element
const menu = document.querySelector('#menu');

let li = document.createElement('li');
li.textContent = 'Products';
menu.appendChild(li);

li = document.createElement('li');
li.textContent = 'About Us';

menu.appendChild(li);
