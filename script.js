const body = document.body;
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');

h1.style.fontStyle = 'italic';
h2.style.fontWeight = 'bold';
h2.style.backgroundColor = 'blue';

const h3 = document.createElement('h3');
h3.textContent = 'Dit is een h3';
h3.style.backgroundColor = 'green';
body.appendChild(h3);