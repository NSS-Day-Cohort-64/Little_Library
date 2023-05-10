// Get a list of the books we have in our library
    // define an exportable function
        // get the data that represents our books

import { getBooks } from "./Database.js";

export const Books = () => {
    const books = getBooks()
    // create a variable to hold HTML representation
    // set it = to ""
    let bookHTML = "<ul>"
    // iterate through all books
    for(const book of books){
        // for each book add HTML representation to the HTML variable
        bookHTML += `<li>${book.title} - ${book.pages} pages</li>`
    }
    // close HTML
    bookHTML += "</ul>"

    // return HTML string
    return bookHTML
}