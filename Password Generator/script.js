const passwordBox = document.getElementById("password");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const special = "~!@#$%^&*()_-++][}{|/,.<>:;'\"\\";
const numbers = "0123456789";

const all = upperCase + lowerCase + special + numbers;

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += special[Math.floor(Math.random() * special.length)];

  while (length > password.length) {
    password += all[Math.floor(Math.random() * special.length)];
  }
  passwordBox.value = password;
}

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
}
