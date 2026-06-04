// import { Createelement } from "./utils.js";
import { CreateElement } from "./Utils.js";
import {Navigation} from './Navigation.js'

export const Sidebar = () => {
  return CreateElement("aside", {
    className: "sidebar",
    children: [
      Navigation([
        'link_1',
        'link_2',
        'link_3',
        'link_4',
        'link_5'
      ])
    ]
  });
};