var throttle = require('lodash.throttle');
let userData = {};
const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');
form.addEventListener('submit', onForm);
email.addEventListener('input', throttle(onInput, 500));
message.addEventListener('input', throttle(onTextArea, 500));
const getData = JSON.parse(localStorage.getItem('feedback-form-state'));

savedData();

function onForm(event) {
  event.preventDefault();
  userData = getData;
  console.log(userData);
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}
function onInput(event) {
  userData.email = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(userData));
}
function onTextArea(event) {
  userData.message = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(userData));
}
function savedData() {
  if (getData) {
    if (getData.email) {
      email.value = getData.email;
    }
    if (getData.message) {
      message.value = getData.message;
    }
  }
}
