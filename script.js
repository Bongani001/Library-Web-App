let myLibrary = [];

function Book() {
    this.author = author.value;
    this.title = title.value;
    this.pages = pages.value;
    this.read = read.value;
};

function addBookToLibrary() {
    event.preventDefault(); // Prevent the form from submitting data
    const theBook = new Book();
    myLibrary.push(theBook);
    console.log(myLibrary);
    console.log('coolest thingy ever!');
    formCompletion.style.display = 'none';
};


for (let ook in myLibrary) {
    
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