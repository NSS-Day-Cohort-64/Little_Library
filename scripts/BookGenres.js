// create a variable and invoke get bookGenres
// create a variable and invoke get books
// create a variable and invoke get genres

// create a function 
//create a variable named HTMLString to initialize our HTML representation
// iterate genres 
    // add article tag = genre type
        // for each genre, iterate bookGenres
            // if this genre.id === bookGenres.genreId
                // find book.id === bookGenre.bookId
                    // add single book to HTMLString


















// build HTML string inside a function
export const createBookGenreHTML = () => {
    const genres = getGenres()
    // create a variable to hold HTML representation
    // set it = to ""
    let genreHTMLString = `<ul>`
    // iterate through all genre
    for (const genre of genres) {
        // display genre's name 
        genreHTMLString += `<li>${genre.type} </li>`
    }
    genreHTMLString += `</ul>`

    return genreHTMLString
}