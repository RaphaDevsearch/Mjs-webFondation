import { CreateElement } from "./Utils.js";
export const ViewContent = () => {
  return CreateElement("section", {
    className: "view-content",
    children: Array.from({ length: 300 }, (_, i) => CreateElement("p", {
        textContent: `Main content goes here. (${i + 1})`
      }))
  });
};