var throttle = require('lodash.throttle');
const form = document.querySelector('.feedback-form');

let email = document.querySelector('input');
let message = document.querySelector('textarea');
form.addEventListener(
  'input',
  throttle(() => {
    let outputStore = {
      email: email.value.trim(),
      message: message.value.trim(),
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(outputStore));
  }, 500)
);
dataStorage();
form.addEventListener('submit', evt => {
  evt.preventDefault();
  let getStorage = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (!getStorage || getStorage.email === '' || getStorage.message === '') {
    alert('Please fill the fields');
    return;
  }
  sendData();
  localStorage.removeItem('feedback-form-state');
  evt.target.reset();
});
function sendData() {
  let getStorage = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (!getStorage) {
    return;
  }
  email.value = getStorage.email;
  message.value = getStorage.message;
  console.log(getStorage);
}
function dataStorage() {
  let getStorage = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (!getStorage) {
    return;
  }
  email.value = getStorage.email;
  message.value = getStorage.message;
}
