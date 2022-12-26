let myLibrary = [];

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
    console.log(myLibrary);
    console.log('coolest thingy ever!');
    formCompletion.style.display = 'none';
};


for (let ook in myLibrary) {
    const content = document.createElement('div');
    content.innerHTML = 'Title: ' + ook.title;
    content.classList.add('book');
    containerCards.appendChild(content);
};

let author = document.querySelector('#author');
let title = document.querySelector('#title');
let pages = document.querySelector('#pages');
let read = document.querySelector('#read');

let submit = document.querySelector('#info');
submit.addEventListener('click', () => {
    addBookToLibrary();
    for (let ook in myLibrary) {
        const content = document.createElement('div');
        content.innerHTML = 'Title: ' + myLibrary[ook].title + '<br>' + 'Author: ' + myLibrary[ook].author + '<br>' + 'Pages: ' + myLibrary[ook].pages + '<br>' + 'Read: ' + myLibrary[ook].read;
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