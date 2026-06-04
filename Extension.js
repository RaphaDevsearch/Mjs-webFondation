import { Sidebar } from "./Sidebar.js";
import { ViewContent } from "./ViewContent.js";
import {CreateElement} from './Utils.js'


export const Header = () => {
  return CreateElement("header", {
    className: "header",
    children: [
      HeaderLeft(),
      HeaderRight()
    ]
  });
};

export const Body = () => {
  return CreateElement("main", {
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
  return CreateElement("div", {
    className: "logo",
    textContent: "MyApp"
  });
};

const UpgradeButton = () => {
  const button = CreateElement("button", {
    className: "btn"
  });

  button.innerHTML = `
    <span>⬆️</span>
    <span>Upgrade</span>
  `;

  return button;
};

const ShareButton = () => {
  const button = CreateElement("button", {
    className: "btn"
  });

  button.innerHTML = `
    <span>🔗</span>
    <span>Share</span>
  `;

  return button;
};

const MenuButton = () => {
  return CreateElement("button", {
    className: "icon-btn",
    textContent: "⋮"
  });
};

const HeaderLeft = () => {
  return CreateElement("div", {
    className: "header-left",
    children: [
      Logo()
    ]
  });
};
const HeaderRight = () => {
  return CreateElement("div", {
    className: "header-right",
    children: [
      UpgradeButton(),
      ShareButton(),
      MenuButton()
    ]
  });
};
