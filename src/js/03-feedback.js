var throttle = require('lodash.throttle');
const form = document.querySelector('.feedback-form');

const email = document.querySelector('input');
const message = document.querySelector('textarea');
form.addEventListener(
  'input',
  throttle(() => {
    let outputStore = {
      email: email.value,
      message: message.value,
    };
    const localData = JSON.stringify(outputStore);
    localStorage.setItem('feedback-form-state', localData);
  }, 500)
);
checkStorage();
form.addEventListener('submit', evt => {
  evt.preventDefault();
  checkStorage();
  evt.target.reset();
});
function checkStorage() {
  const getStorage = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (getStorage.email === '' || getStorage.message === '') {
    return;
  }
  email.value = getStorage.email;
  message.value = getStorage.message;
  console.log(getStorage);
}