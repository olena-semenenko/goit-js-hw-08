var throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

form.addEventListener('input', throttle(onForm, 500));
form.addEventListener('submit', onFormSubmit);

const userData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

savedData();

function onForm(event) {
  userData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(userData));
}

function onFormSubmit(event) {
  event.preventDefault();
  console.log(userData);
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}
function savedData() {
  if (userData) {
    if (userData.email) {
      email.value = userData.email;
    }
    if (userData.message) {
      message.value = userData.message;
    }
  }
}
