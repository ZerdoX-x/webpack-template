import './import/modules'
import './libs/libs'

import printMe from './libs/libs'

function component() {
  const btn = document.createElement('button');
  const element = document.createElement('div');

  element.innerHTML = 'Hello'

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());