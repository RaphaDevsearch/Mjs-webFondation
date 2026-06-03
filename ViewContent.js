import { createelement } from "./Extension.js";
export const ViewContent = () => {
  return createelement("section", {
    className: "view-content",
    children: [
      createelement("h2", {
        textContent: "Dashboard"
      }),

      createelement("p", {
        textContent: "Main content goes here."
      })
    ]
  });
};