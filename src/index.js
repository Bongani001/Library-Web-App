import { initializeApp } from "firebase/app";
import { getAuth,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    signOut, } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyDiKEt3uUSRC41vBI3TA3PGT5lTsjANWKc",
    authDomain: "book-library-01.firebaseapp.com",
    projectId: "book-library-01",
    storageBucket: "book-library-01.appspot.com",
    messagingSenderId: "608960923658",
    appId: "1:608960923658:web:ad439a3e94e93df40377f3"
});
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const books = collection(db, "books");

onAuthStateChanged(auth, user => {
    if (user !== null) {
        console.log("Logged in!");
    } else {
        console.log("No user");
    }
});


let myLibrary = [];

function Book() {
    this.title = title.value;
    this.author = author.value;
    this.pages = pages.value;
    this.read = 'No';
};

function addBookToLibrary() {
    const theBook = new Book();
    myLibrary.push(theBook);
    console.log(myLibrary);
};

// function to Display content in html
function displayBooks() { 
    let i = 0;
    for (let ook in myLibrary) { 
        const content = document.createElement('div');
        content.innerHTML = 'Title: ' + myLibrary[ook].title + '<br><br>' + 'Author: ' + myLibrary[ook].author + '<br><br>' + 'Pages: ' + myLibrary[ook].pages + '<br><br>';
        content.classList.add('book');
        content.dataset.childnum = i;
        containerCards.appendChild(content);

        // Create yes/no div
        let status = document.createElement('span');
        status.innerHTML = `Read: ${myLibrary[ook].read} <br><br>`;
        content.appendChild(status);

        // Create an onclick event for toggle button
        const toggle = document.createElement('div');
        toggle.classList.add('toggle-container');
        content.appendChild(toggle);
        //const innerCircle = document.createElement('div');
        //innerCircle.classList.add('inner-circle');
        toggle.innerHTML = 'Update';
        //toggle.appendChild(innerCircle);
        

        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            let nmbr = toggle.parentElement.dataset.childnum;
            if (toggle.classList.contains('active')) {
                myLibrary[ook].read = 'Yes';
                status.innerHTML = `Read : ${myLibrary[ook].read} <br><br>`;
            } else {
                myLibrary[ook].read = 'No';
                status.innerHTML = `Read : ${myLibrary[ook].read} <br><br>`;
            };
        });

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
        i++;
    };
};

let author = document.querySelector('#author');
let title = document.querySelector('#title');
let pages = document.querySelector('#pages');
let read = document.querySelector('#read');

let submit = document.querySelector('#info');
submit.addEventListener('click', () => {
    let libraryLength = myLibrary['length'];
    if ((title.value && author.value && pages.value) === '') {
        return
    };
    addBookToLibrary();
    containerCards.innerHTML = '';
    displayBooks(); // Display content in html
    formCompletion.style.display = 'none';
    event.preventDefault(); // Prevent the form from submitting data
});



//let book = document.querySelector('.book');
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