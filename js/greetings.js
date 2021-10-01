const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greet-box");
const firstGreeting = greeting.querySelector("div:first-child");
const secondGreeting = greeting.querySelector("div:last-child");

const sentence = 
["Don't dwell on the past.",
"Believe in yourself.",
"Follow your heart.",
"Seize the day.",
"You only live once.",
"Past is just past.",
"Love yourself.",
"Where there is a will there is a way.",
"Don't beat yourself up.",
"Life is a journey.",
"Don't dream, Be it.",
"No pain, No gain.",
"No sweat, No sweet.",
]
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    firstGreeting.innerText = `Hello ${username}!`;
    secondGreeting.innerText = sentence[Math.floor(Math.random() * sentence.length)];
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else{
    paintGreetings(savedUserName);
}