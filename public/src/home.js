function getTotalBooksCount(books) {
  //return the length of the books array 
  return books.length;
}

function getTotalAccountsCount(accounts) {
  //return the length of the accounts array 
  return accounts.length;
}


  function getBooksBorrowedCount(books) {
//use reduce method to increment acc if the book has been borrowed
 //use a conditional to see if the book is checked out 
    return books.reduce((acc, book) => {
      if (!book.borrows[0].returned) {
        acc++;
          } 
          //return acc;
        return acc++;
    }, 0);
  }


function getMostCommonGenres(books) {
  //use reduce to create a callback function 
  let numOfGenres = books.reduce((acc, book) =>
    //check if accumulator at the book.genre key exsists
  {if(acc[book.genre])
      //increment count key 
  { acc[book.genre].count++ } 
         //else create a value/key pair that sets name key to the genre and the count to 1
  else { acc[book.genre]={name: book.genre, count: 1} }
            //return accumulator
   return acc}, {}) 
   //create a new array from the keys of the genres object
   let genres = Object.keys(numOfGenres).map((name) => numOfGenres[name] ) 
     //sort the generes array from popularity using the count key
   let sortedGenres = genres.sort((genreA, genreB) => genreA.count < genreB.count ? 1 : -1 ) 
      //return the first five genres with the highest sorted count
   return sortedGenres.slice(0, 5) 

  }


function getMostPopularBooks(books) {
    //use reduce to create a callback function 
    let mostPopular = books.reduce((acc, book) =>
    //create an object that sets name key to the book titile and the count to the borrows array
    { acc[book.borrows.length]= {name: book.title, count: book.borrows.length} 
       //return accumulator
     return acc}, {}) 
    //create a new array from the keys of the mostpopular object
     let titles = Object.keys(mostPopular).map((name) => mostPopular[name]) 
     //sort the array from popularity using the count key
     let sortedPop = titles.sort((popA, popB) => popA.count < popB.count ? 1 : -1 ) 
      //return the first five books with the highest sorted count
     return sortedPop.slice(0, 5);  
}

//sorting helper function 
function _sortObjectByValues(obj) {
  //takes in an object
    //sets keys to the keys of the object
  const keys = Object.keys(obj);
      //uses a conditional to sort the keys 
  return keys.sort((keyA, keyB) => {
    if (obj[keyA] > obj[keyB]) {
      return -1;
    } else if (obj[keyB] > obj[keyA]) {
      return 1;
    } else {
      return 0;
    }
  });
}


  function getMostPopularAuthors(books, authors) {
    //use reduce to create a callback function with object shorthand 
    const count = books.reduce((acc, { authorId, borrows }) => {
       //use a conditional to check if the author id exsists at the obj
      if (acc[authorId]) {
         //push the length of the borrows array if the author exsists
        acc[authorId].push(borrows.length);
          //create a new value/key par equal to the borrows.length 
      } else {
        acc[authorId] = [borrows.length];
      }
         //return the object
      return acc;
    }, {});
    
    //use a for in loop to iterate over count object
    for (let id in count) {
      //intialize a sum variable using reduce
      const sum = count[id].reduce((acc, b) => acc + b);
        //set a id/sum pair in the count obj
      count[id] = sum;
    }
   
    //sort the count variable
    const sorted = _sortObjectByValues(count);
    
    //create an array using map from the sorted count object 
    let arr = sorted
    
      .map((authorId) => {
        const {
          name: { first, last },
          // create an object in the array that finds the first instance of id and checks if its equal to the authorid number
        } = authors.find(({ id }) => id === Number(authorId));
           //use template literals to set name 
        let name = `${first} ${last}`;
          //return count object with author name
        return { name, count: count[authorId] };
      })
    //slice the array to the top five counts
      .slice(0, 5);

    //return array 
    return arr;
  }


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
