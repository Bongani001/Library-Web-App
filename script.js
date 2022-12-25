let myLibrary = [];

function Book() {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
   // this.info = function () {
    //    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    //};
};

function addBookToLibrary() {
    
};



let book = document.querySelector('.book');
let containerCards = document.querySelector('.book-cards');


//const theHobbit = new Book();
//console.log(theHobbit.info());
//myLibrary.push(theHobbit);
console.log(myLibrary);

let author = document.querySelector('#author');
let title = document.querySelector('#title');
let pages = document.querySelector('#pages');
let read = document.querySelector('#read');

function cool() {
    book.textContent += `Title:`
    book.textContent += `Auther:`
    book.textContent += `Name:`
    book.textContent += `Pages:`
    containerCards.appendChild(book);
};

let submit = document.querySelector('#info');
submit.addEventListener("click", cool);

let formCompletion = document.querySelector('.form-completion');

