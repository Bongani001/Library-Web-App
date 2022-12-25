let myLibrary = [];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
};

function addBookToLibrary() {
    const theBook = new Book(author.value, title.value, pages.value, read.value);
    myLibrary.push(theBook);
    console.log(myLibrary);
    displayBook();
};

function displayBook() {
    myLibrary.forEach(buka => {
        containerCards.appendChild(buka);
    });
};

let author = document.querySelector('#author');
let title = document.querySelector('#title');
let pages = document.querySelector('#pages');
let read = document.querySelector('#read');

let submit = document.querySelector('#info');
submit.addEventListener('click', addBookToLibrary);


let book = document.querySelector('.book');
let containerCards = document.querySelector('.book-cards');

let formCompletion = document.querySelector('.form-completion');
const addBook = document.querySelector('.add-book');

addBook.addEventListener('click', () => {
    formCompletion.style.display = 'grid';
});