import "../css/register.scss";
import "../css/home.scss";
import "../css/products.scss";

let db;
if (!window.indexedDB) {
    window.indexedDB =
        window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB;
}

if (!window.indexedDB) {
    alert("Your browser does'nt support indexed DB !");
} else {
    const connection = window.indexedDB.open("shopingCartDB", 1);
    connection.onsuccess = function () {
        console.log("Connection opened successfully !");
        db = connection.result;
    };
    connection.onerror = function () {
        console.log("Error opening the connection !");
    };
    connection.onupgradeneeded = function (e) {
        db = e.target.result; // access to database
        const usersOS = db.createObjectStore("users"); // table / collection
        usersOS.createIndex("email", "email", { unique: true });
    };
    const registerForm = document.getElementById("registerForm");

    if (registerForm) {
        registerForm.addEventListener("submit", registerUser);
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', signInUser);
    }
}

function registerUser(event) {
    event.preventDefault();
    if (this.querySelector('#password').value !== this.querySelector('#cnfPassword').value) {
        alert('Password and confirm password does not match!!!');
    } else {
        const firstName = this.querySelector('#firstname').value;
        const lastName = this.querySelector('#lastname').value;
        const email = this.querySelector('#email').value;
        const password = this.querySelector('#password').value;
        const user = { firstName, lastName, email, password };
        const txn = db.transaction(["users"], "readwrite");
        const store = txn.objectStore("users");
        const request = store.add(user, email);
        request.onsuccess = function () {
            alert('User has been registered successfully. Please signin to continue...');
            window.location.assign("/login.html");
        }
        request.onerror = function () {
            alert('Unable to register user at the moment. Please try again later...')
        }
    }
}

function signInUser(event) {
    event.preventDefault();
    const txn = db.transaction(["users"], "readwrite");
    const store = txn.objectStore("users");
    const email = this.querySelector("#email").value;
    const password = this.querySelector("#password").value;
    const req = store.get(email);
    req.onsuccess = function (e) {
        const user = e.target.result;
        if (!user) {
            alert('User not found. Please register to continue...');
        } else if (user.password !== password) {
            alert('Invalid credentials!');
        } else {
            localStorage.setItem('user', JSON.stringify(user));
            window.location.assign('/');
        }
    };
}

const shoppingCartButton = document.querySelector('.cart');

const modal = document.getElementById("cartModal");

const closeModalButton = document.getElementsByClassName("close")[0];

const mainElement = document.querySelector('main');

shoppingCartButton.addEventListener('click', function () {
    modal.style.display = "block";
    mainElement.classList.add('d-none-sm-device');
});

if (closeModalButton) {
    closeModalButton.addEventListener('click', function () {
        modal.style.display = "none";
        mainElement.classList.remove('d-none-sm-device');
    });
}
