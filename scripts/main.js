import { Books } from "./Books.js";
import { createChildrenHTML } from "./Children.js";

const parentHTMLElement = document.querySelector("#container")

parentHTMLElement.innerHTML = Books() + createChildrenHTML()
