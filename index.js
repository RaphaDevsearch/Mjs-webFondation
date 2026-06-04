import {
  Header,
  Body
} from './Extension.js';
import {CreateElement} from './Utils.js'
const App = () => {
  return CreateElement("div", {
    id: "app",
    children: [
      Header(),
      Body()
    ]
  });
};
const app = App();
document.body.appendChild(app);