const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol ="`@#$%^&*()_+-=~,./?:;|{}[]-";

let char = uppercase + lowercase + number + symbol;
let length = 12;
const PasswordBox = document.getElementById('passwordbox');

function GeneratePassword(){
    let password = "";
    password += uppercase[Math.floor(Math.random()*uppercase.length)];
    password += lowercase[Math.floor(Math.random()*lowercase.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += symbol[Math.floor(Math.random()*symbol.length)];

    while (length > password.length) {
        password += char[Math.floor(Math.random()*char.length)];
    }
    PasswordBox.value = password;
}
function EightLetters(){
    length = 8;
    while (length > password.length) {
        password += char[Math.floor(Math.random()*char.length)];
    }
    PasswordBox.value = password;
}
function TwelveLetters(){
    length = 12;
    while (length > password.length) {
        password += char[Math.floor(Math.random()*char.length)];
    }
    PasswordBox.value = password;
}
function FifteenLetters(){
    length = 15;
    while (length > password.length) {
        password += char[Math.floor(Math.random()*char.length)];
    }
    PasswordBox.value = password;
}


