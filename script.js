let myLibrary = [];

function Book() {
    this.title = 'The Hobbit';
    this.author = 'J.J.R Tolkien';
    this.pages = 295;
    this.read = 'not read yet';
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    };
};

function addBookToLibrary() {
    // do stuff here
  }

const theHobbit = new Book();
console.log(theHobbit.info());