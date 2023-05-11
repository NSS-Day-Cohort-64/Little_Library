// Get a list of the children we have in our library
    // define an exportable function
        // get the data that represents our children
            // save copy of children array to a variable

import { getChildren } from "./Database.js"

            // build HTML string inside a function
export const createChildrenHTML = () => {
    const children = getChildren()
    // create a variable to hold HTML representation
    // set it = to ""
    let childrenHTMLString = `<ul>`
    // iterate through all children
    for (const child of children) {
        // display children's name and libary card
        childrenHTMLString += `<li>${child.name} - ${child.libraryCard}</li>`
    }
    childrenHTMLString += `</ul>`

    return childrenHTMLString
}
