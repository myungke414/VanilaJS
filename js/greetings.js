// const loginForm = document.querySelectorById("login-form");
const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

// const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden"; //일반적으로 string만 포함한 함수는 대문자로 쓴다.
const USERNAME_KEY = "username"; 

function onLoginSubmit (event) {
    event.preventDefault();
    // const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    // console.log(username);
    // greeting.innerText = "Hello " + username;
    localStorage.setItem(USERNAME_KEY, username);
    // greeting.innerText = `Hello ${username}`; 
    // greeting.classList.remove(HIDDEN_CLASSNAME);
    paintGreetings(username);
}

// function handleLinkClick(event) {
//     event.preventDefault(); //event 동작을 막음
//     console.dir(event);
//     // alert("clicked");
// }

// loginButton.addEventListener("click", onLoginBtnClick);

// link.addEventListener("click", handleLinkClick);

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`; 
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greetings
    // greeting.innerText = `Hello ${savedUsername}`; 
    // greeting.classList.remove(HIDDEN_CLASSNAME);
    paintGreetings(savedUsername);
}