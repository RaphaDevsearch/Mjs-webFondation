import { CreateElement } from "./Utils.js";

export const Navigation = (items = []) => {

  const links = items.map(item => {

    const anchor = CreateElement("a", {
      textContent: item.label
    });

    anchor.href = item.href;

    return CreateElement("li", {
      children: [anchor]
    });

  });

  return CreateElement("nav", {
    className: "navigation",
    children: [
      CreateElement("ul", {
        className: "navigation-list",
        children: links
      })
    ]
  });

};