import { createBookGenreHTML } from "./BookGenres.js";
import { Books } from "./Books.js";
import { createChildrenHTML } from "./Children.js";


const parentHTMLElement = document.querySelector("#container")

parentHTMLElement.innerHTML = createBookGenreHTML() + Books() + createChildrenHTML() 
