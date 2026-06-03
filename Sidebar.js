// import { createelement } from "./utils.js";
import { createelement } from "./Extension.js";

export const Sidebar = () => {
  return createelement("aside", {
    className: "sidebar",
    children: [
      createelement("h3", {
        textContent: "Navigation"
      })
    ]
  });
};