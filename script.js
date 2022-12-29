let myLibrary = [];

function Book() {
    this.title = title.value;
    this.author = author.value;
    this.pages = pages.value;
    this.read = 'No';
};

function addBookToLibrary() {
    event.preventDefault(); // Prevent the form from submitting data
    const theBook = new Book();
    myLibrary.push(theBook);
    console.log(myLibrary);
    formCompletion.style.display = 'none';
};

// Display content in html
function displayBooks() { 
    let i = 0;
    for (let ook in myLibrary) { 
        const content = document.createElement('div');
        content.innerHTML = 'Title: ' + myLibrary[ook].title + '<br>' + 'Author: ' + myLibrary[ook].author + '<br>' + 'Pages: ' + myLibrary[ook].pages + '<br>' + '<span class=\'read-text\'>Read: No</span>' + '<br>' + toggleBtn + '<br>';
        content.classList.add('book');
        content.dataset.childnum = i;
        containerCards.appendChild(content);
        // Create a remove button
        const removebtn = document.createElement('button');
        removebtn.classList.add('remove-btn');
        removebtn.innerHTML = 'Remove';
        content.appendChild(removebtn);
        removebtn.addEventListener('click', () => {
            let deleteNum = removebtn.parentElement.dataset.childnum;
            myLibrary.splice(deleteNum, 1);
            removebtn.parentElement.remove();
        });

        // Create an onclick event for toggle button
        let toggle = document.querySelector('.toggle-container');

        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            if (toggle.classList.contains('active')) {
                document.querySelector('.read-text').innerHTML = 'Read: Yes';
            } else {
                document.querySelector('.read-text').innerHTML = 'Read: No';
            };
        });
        i++;
    };
};

let author = document.querySelector('#author');
let title = document.querySelector('#title');
let pages = document.querySelector('#pages');
let read = document.querySelector('#read');

let submit = document.querySelector('#info');
submit.addEventListener('click', () => {
    addBookToLibrary();
    containerCards.innerHTML = '';
    displayBooks();
});



let book = document.querySelector('.book');
let containerCards = document.querySelector('.book-cards');

let formCompletion = document.querySelector('.form-completion');
const addBook = document.querySelector('.add-book');

addBook.addEventListener('click', () => {
    formCompletion.style.display = 'grid';
});

let toggle = document.querySelector('.toggle-container');

// Create inner HTML for the toggle button for reference 
let toggleBtn = '<div class=\"toggle-container">\
<div class="inner-circle"></div>\
</div>\
<br>'