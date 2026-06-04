// import { Createelement } from "./utils.js";
import { CreateElement } from "./Utils.js";

export const Sidebar = () => {
  return CreateElement("aside", {
    className: "sidebar",
    children: [
      CreateElement("h3", {
        textContent: "Navigation"
      })
    ]
  });
};