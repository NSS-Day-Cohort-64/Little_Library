import { Books } from "./Books.js";
import { createChildrenHTML } from "./Children.js";
import { createGenreHTML } from "./Genres.js";

const parentHTMLElement = document.querySelector("#container")

parentHTMLElement.innerHTML = Books() + createChildrenHTML() + createGenreHTML()
