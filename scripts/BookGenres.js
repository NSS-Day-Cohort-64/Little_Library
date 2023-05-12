import { getBookGenres, getBooks, getGenres } from "./Database.js"
// create a variable and invoke get bookGenres
// create a variable and invoke get books
// create a variable and invoke get genres
const genres = getGenres()
const books = getBooks()
const bookGenres = getBookGenres()
// create a function 
export const createBookGenreHTML = () => {
    //create a variable named HTMLString to initialize our HTML representation
    let bookGenreHTMLString = `<section class = bookGenreBox >`
    // iterate genres 
    for (const genre of genres) {
        // add article tag = genre type
        bookGenreHTMLString += `<div class = bookGenre> <h2>${genre.type} </h2> <ul>`
        // for each genre, iterate bookGenres
        for (const bookGenre of bookGenres) {
            // if this genre.id === bookGenres.genreId
            if (genre.id === bookGenre.genreId){
                let matchingBooks = books.filter(book => book.id === bookGenre.bookId)
                // find book.id === bookGenre.bookId
                for (const matchingBook of matchingBooks){
                    // add single book to HTMLString
                    bookGenreHTMLString += `<li> ${matchingBook.title} </li>`
                }
            }

        }
        bookGenreHTMLString += `</ul> </div>`
    }
    bookGenreHTMLString += `</section>`
    // return HTMLString
    return bookGenreHTMLString
}