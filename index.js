import {
  createelement,
  Header,
  Body
} from './Extension.js';

const App = () => {
  return createelement("div", {
    id: "app",
    children: [
      Header(),
      Body()
    ]
  });
};
const app = App();
document.body.appendChild(app);