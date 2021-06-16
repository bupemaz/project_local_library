function findAccountById(accounts, id) {
  //use find method to access account.id key and match to given id
  const found = accounts.find((account) => account.id === id);
  // return found
  return found;
}

function sortAccountsByLastName(accounts) {
  // use sort method to sort accounts
  return accounts.sort((a,b) => a.name.last.toLowerCase() > b.name.last.toLowerCase() ? 1:-1);
}

function getTotalNumberOfBorrows(account, books) {
  // use reduce to access borrows array in books object
  return books.reduce((acc, book) => {
    //use forEach method to print borrow objects
    book.borrows.forEach((borrow) => {
       // use conditional to match borrow.id and account id
         //if there is a match increment the accumulator to count
      if(borrow.id === account.id) {
        acc++
      
      }
    })
     //return the count for the number of borrows
    return acc;
  }, 0)
    }



function getBooksPossessedByAccount(account, books, authors) {
  //initiate account id variable to compare to authorId in authors object 
const accid = account.id;
  //use filter method with find method to extract first instance of borrow object where book is checked out and the borrow id matchs the account Id
let checkedOut = books.filter((book) => book.borrows.find((borrow) => borrow.returned == false && borrow.id == accid))
return checkedOut.map((book) => {
   //use map method to create an array with checkedoutObject
    //create object with checked out objects
      // key value pair of author which equates to the first instance of the author that matchs the author ID 
       // return the obj
  return {...book,
  author: authors.find((author) => book.authorId == author.id)}

}) 
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
