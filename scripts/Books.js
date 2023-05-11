// Get a list of the books we have in our library
// define an exportable function
// get the data that represents our books
// ++ get author data
import { getAuthors, getBooks } from "./Database.js";


export const Books = () => {
    const books = getBooks()
    // ++ create a variable to hold our imported function
    const authors = getAuthors()
    // create a variable to hold HTML representation
    // set it = to ""
    let bookHTML = "<ul>"
    // iterate through all books
    for (const book of books) {
        // for each book add HTML representation to the HTML variable
        //++ for each author 
        for (const author of authors) {
            // ++ author.id === book.authorId
            if (author.id === book.authorId) {
                // ++ display author
                bookHTML += `<li>${book.title} - ${author.name} </li>`
            }
        }
    }
    // close HTML
    bookHTML += "</ul>"

    // return HTML string
    return bookHTML
}