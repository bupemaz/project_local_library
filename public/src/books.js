function findAuthorById(authors, id) {
  //use find method to return first instance of author that matches the provided ID
  const foundAuthor = authors.find((author) => author.id === id);
  return foundAuthor;

}

function findBookById(books, id) {
   //use find to return first instance of book that matches the provided ID
  const foundBook = books.find((book) => book.id === id);
  return foundBook;
}

function partitionBooksByBorrowedStatus(books) { 
  //intialize empty to hold borrowed and returned arrays
let bookStatus = [];
   //use filter to return arrays that match the conditions 
let returnedBooks = books.filter((book)=>book.borrows[0].returned === true)
let borrowedBooks = books.filter((book)=>book.borrows[0].returned === false)
   //use if statements to push borrowed and returned books into empty bookstatus array
if (borrowedBooks) {
  bookStatus.push(borrowedBooks);
} 
   
if (returnedBooks) {
  bookStatus.push(returnedBooks);
}

//return bookStatus
return bookStatus;
};

function getBorrowersForBook(book, accounts) {
//intialize a bookObjs variable to hold the collection of bookObjects in book parameter
  //map over the objects to create an array
    //use find within the map call to return first instance of a match between account Id and borrow id
       
let bookObjs = book.borrows.map(borrow => {
   let account = accounts.find((account) => {
     return (account.id === borrow.id)
   })
     //create and return a new obj that holds the borrow id, book status, and account info
   return {
     id: borrow.id,
     returned: borrow.returned,
     ...account
   }
   
 })
   //return the bookObjs and use slice method to return first ten objects in the array
  return bookObjs.slice(0, 10);
}



module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
