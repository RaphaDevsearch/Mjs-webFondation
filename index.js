import {
  createelement
} from './Extension.js';

const app = createelement('div', {
  id: 'app',
  className: 'container',
  textContent: 'Hello, World!'
});

document.body.appendChild(app);