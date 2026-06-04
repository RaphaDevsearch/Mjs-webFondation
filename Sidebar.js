// import { Createelement } from "./utils.js";
import { CreateElement } from "./Utils.js";
import {Navigation} from './Navigation.js'

export const Sidebar = () => {
  return CreateElement("aside", {
    className: "sidebar",
    children: [
      Navigation([
        {
          label: "Dashboard",
          href: "#dashboard"
        },
        {
          label: "Projects",
          href: "#projects"
        },
        {
          label: "Settings",
          href: "#settings"
        }
      ])
    ]
  });
};