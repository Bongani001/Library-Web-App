import { initializeApp } from "firebase/app";
import { getAuth,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    signOut, } from "firebase/auth";
import { getFirestore, 
    collection,
    addDoc,
    query,
    orderBy,
    limit,
    onSnapshot,
    setDoc,
    updateDoc,
    doc,
    serverTimestamp,
    getDoc, } from "firebase/firestore";
import "./style.css";



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

// Signs-in Book Library.
async function signIn() {
    // Sign in Firebase using popup auth and Google as the identity provider.
    var provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
};

// Signs-out of Book Library.
function signOutUser() {
    // Sign out of Firebase.
    signOut(auth);
};

// Initialize firebase auth
function initFirebaseAuth() {
    // Listen to auth state changes.
    onAuthStateChanged(auth, user => {
        if (user !== null) {
            console.log("Logged in!");
            logButton.textContent = "Logout";
            let userAccountName = getUserName();
            userName.textContent = userAccountName;
        } else {
            console.log("No user");
            logButton.textContent = "Login";
            userName.textContent = "";
        }
    });
};

// Returns the signed-in user's display name.
function getUserName() {
    return auth.currentUser.displayName;
}

// Returns true if a user is signed-in.
function isUserSignedIn() {
    return !!auth.currentUser;
}

const userName = document.querySelector(".user-name");
const logButton = document.querySelector(".log-status-button");

logButton.addEventListener("click", () => {
    // console.log(!isUserSignedIn());
    let userStatus = !isUserSignedIn();
    if (userStatus) {
        signIn();
    } else {
        signOutUser();
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
    let userStatus = isUserSignedIn();
    if (userStatus) {
        let theBook = new Book();
        myLibrary.push(theBook);
        // console.log(myLibrary);
        console.log({...theBook});
        saveBook(theBook);
    } else {
        alert("Login first before submitting your book information");
    };
};

async function saveBook(bookData) {
    try {
        await addDoc(books, {
          name: getUserName(),
          ...bookData,
          timestamp: serverTimestamp()
        });
      }
      catch(error) {
        console.error('Error writing new book information to Firebase Database', error);
      }
}

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
submit.addEventListener('click', (e) => {
    let libraryLength = myLibrary['length'];
    if ((title.value && author.value && pages.value) === '') {
        return
    };
    addBookToLibrary();
    containerCards.innerHTML = '';
    displayBooks(); // Display content in html
    formCompletion.style.display = 'none';
    e.preventDefault(); // Prevent the form from submitting data
});



//let book = document.querySelector('.book');
let containerCards = document.querySelector('.book-cards');

let formCompletion = document.querySelector('.form-completion');
const addBook = document.querySelector('.add-book');

// Display a form for inputing info about a book
addBook.addEventListener('click', () => {
    formCompletion.style.display = 'grid';
});

let toggle = document.querySelector('.toggle-container');

// Create inner HTML for the toggle button for reference 
let toggleBtn = '<div class=\"toggle-container">\
<div class="inner-circle"></div>\
</div>\
<br>'

initFirebaseAuth();