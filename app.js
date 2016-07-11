angular.module('booksApp', []); // sets the booksApp module

// angular
//   .module('booksApp')
//   .value('secretOfLife', 42)

angular.module('booksApp') // gets the booksApp module
  .controller('BooksController', BooksControllerFunc);// add controller to the module

BooksControllerFunc.$inject = ['$http']

function BooksControllerFunc($http) {
  console.log('Instantiated BooksController');
  // console.log('The secret of life is ', secretOfLife);
  $http
    .get('https://www.reddit.com/r/programming.json')
    .success(function(response){console.log(response)});



  this.booksList = ['Anne of Green Gables', "Ender's Game", 'Song of Fire and Ice', 'Feast for Crows', 'HTML for Dummies', "Hitchhiker's Guide to the Galaxy", "So Long and Thanks for All the Fish" ]
  this.addBook = function(bookName) {
    this.booksList.push(bookName)
    this.newBook = ''
  }
  this.updateBook = function(book, index){
    this.booksList.splice(index, 1, book)
  }
  this.destroyBook = function(book)  {
    var index = this.booksList.indexOf(book)
    this.booksList.splice(index, 1)
  }


}
