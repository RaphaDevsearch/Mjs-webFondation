import { Sidebar } from "./Sidebar.js";
import { ViewContent } from "./ViewContent.js";

export const createelement = (
  tagName,
  {
    className = '',
    id = '',
    textContent = '',
    children = [],
    othersAttributes = {},
  }={}
)=>{
  const element = document.createElement(tagName);
  if(className) element.className = className;
  if(id) element.id = id;
  if(textContent) element.textContent = textContent;

  if(children.length > 0){
    children.forEach(child =>{
      element.appendChild(child);
    })
  }
  return element;
}

export const Header = () => {
  return createelement("header", {
    className: "header",
    children: [
      HeaderLeft(),
      HeaderRight()
    ]
  });
};

export const Body = () => {
  return createelement("main", {
    className: "body",
    children: [
      Sidebar(),
      ViewContent()
    ]
  });
};


/**
 * conponents
 */

const Logo = () => {
  return createelement("div", {
    className: "logo",
    textContent: "MyApp"
  });
};

const UpgradeButton = () => {
  const button = createelement("button", {
    className: "btn"
  });

  button.innerHTML = `
    <span>⬆️</span>
    <span>Upgrade</span>
  `;

  return button;
};

const ShareButton = () => {
  const button = createelement("button", {
    className: "btn"
  });

  button.innerHTML = `
    <span>🔗</span>
    <span>Share</span>
  `;

  return button;
};

const MenuButton = () => {
  return createelement("button", {
    className: "icon-btn",
    textContent: "⋮"
  });
};

const HeaderLeft = () => {
  return createelement("div", {
    className: "header-left",
    children: [
      Logo()
    ]
  });
};
const HeaderRight = () => {
  return createelement("div", {
    className: "header-right",
    children: [
      UpgradeButton(),
      ShareButton(),
      MenuButton()
    ]
  });
};
