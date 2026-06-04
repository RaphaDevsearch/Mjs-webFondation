import { CreateElement } from "./Utils.js";
export const ViewContent = () => {
  return CreateElement("section", {
    className: "view-content",
    children: [
      CreateElement("h2", {
        textContent: "Dashboard"
      }),

      CreateElement("p", {
        textContent: "Main content goes here."
      })
    ]
  });
};