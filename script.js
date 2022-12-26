let myLibrary = [];
let myOtherLibrary = [];

function Book() {
    this.title = title.value;
    this.author = author.value;
    this.pages = pages.value;
    this.read = read.value;
};

function addBookToLibrary() {
    event.preventDefault(); // Prevent the form from submitting data
    const theBook = new Book();
    myLibrary.push(theBook);
    myOtherLibrary = myLibrary.slice(-1);
    console.log(myLibrary);
    console.log(myOtherLibrary);
    formCompletion.style.display = 'none';
};

let author = document.querySelector('#author');
let title = document.querySelector('#title');
let pages = document.querySelector('#pages');
let read = document.querySelector('#read');

let submit = document.querySelector('#info');
submit.addEventListener('click', () => {
    addBookToLibrary();
    for (let ook in myOtherLibrary) { // Display content in html
        const content = document.createElement('div');
        content.innerHTML = 'Title: ' + myOtherLibrary[ook].title + '<br>' + 'Author: ' + myOtherLibrary[ook].author + '<br>' + 'Pages: ' + myOtherLibrary[ook].pages + '<br>' + 'Read: ' + myOtherLibrary[ook].read;
        content.classList.add('book');
        containerCards.appendChild(content);
    };
});


let book = document.querySelector('.book');
let containerCards = document.querySelector('.book-cards');

let formCompletion = document.querySelector('.form-completion');
const addBook = document.querySelector('.add-book');

addBook.addEventListener('click', () => {
    formCompletion.style.display = 'grid';
});