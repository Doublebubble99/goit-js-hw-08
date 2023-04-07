var throttle = require('lodash.throttle');
const form = document.querySelector('.feedback-form');

const email = document.querySelector('input');
const message = document.querySelector('textarea');
form.addEventListener(
  'input',
  throttle(() => {
    let outputStore = {
      email: email.value.trim(),
      message: message.value.trim(),
    };
    const localData = JSON.stringify(outputStore);
    localStorage.setItem('feedback-form-state', localData);
  }, 500)
);
checkStorage();
form.addEventListener('submit', evt => {
  evt.preventDefault();
  sendData();
  evt.target.reset();
});
function checkStorage() {
  let getStorage = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (getStorage.email === '' || getStorage.message === '') {
    return;
  }
  sendData();
  dataStorage();
}
function sendData() {
  let getStorage = JSON.parse(localStorage.getItem('feedback-form-state'));
  email.value = getStorage.email;
  message.value = getStorage.message;
  console.log(getStorage);
}
function dataStorage() {
  let getStorage = JSON.parse(localStorage.getItem('feedback-form-state'));
  email.value = getStorage.email;
  message.value = getStorage.message;
}
