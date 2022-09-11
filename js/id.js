const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".userId");
const loginBckground = document.querySelector(".loginBackground");
const loginDot = document.querySelector(".loginDotted");
const log = document.querySelector(".login");
const dot1 = document.querySelector(".loginD1");
const dot2 = document.querySelector(".loginD2");
const dot3 = document.querySelector(".loginD3");
const dot4 = document.querySelector(".loginD4");
const text = document.querySelector(".textLogin");
const welcome = document.querySelector(".welcome1");


const HIDDEN_CLASSNAME = "hidden";
const finalId = document.querySelector(".idName");

function onLogin(event) {
    event.preventDefault();
    loginBckground.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    log.classList.add(HIDDEN_CLASSNAME);
    loginDot.classList.add(HIDDEN_CLASSNAME);
    dot1.classList.add(HIDDEN_CLASSNAME);
    dot2.classList.add(HIDDEN_CLASSNAME);
    dot3.classList.add(HIDDEN_CLASSNAME);
    dot4.classList.add(HIDDEN_CLASSNAME);
    text.classList.add(HIDDEN_CLASSNAME);

    const username = loginInput.value;

    localStorage.setItem("username", username);
    paintUsername();
}

function paintUsername() {
    const uName = localStorage.getItem("username");
    finalId.innerText = `${uName}`;
    welcome.innerText = `Welcome ${uName}!`;
}

const savedUsername = localStorage.getItem("username");

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLogin);
}else {
    loginBckground.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    log.classList.add(HIDDEN_CLASSNAME);
    loginDot.classList.add(HIDDEN_CLASSNAME);
    dot1.classList.add(HIDDEN_CLASSNAME);
    dot2.classList.add(HIDDEN_CLASSNAME);
    dot3.classList.add(HIDDEN_CLASSNAME);
    dot4.classList.add(HIDDEN_CLASSNAME);
    text.classList.add(HIDDEN_CLASSNAME);
    paintUsername();
}