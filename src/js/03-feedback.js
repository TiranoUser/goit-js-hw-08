import throttle from 'lodash/throttle';

const form = document.querySelector('.feedback-form');

if (localStorage.getItem('feedback-form-state') !== null) {
  const emailEl = form.elements['email'];
  emailEl.value = JSON.parse(localStorage.getItem('feedback-form-state')).email;
  const messageEl = form.elements['message'];
  messageEl.value = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ).message;
}

form.addEventListener(
  'input',
  throttle(event => {
    event.preventDefault();
    const {
      elements: { email, message },
    } = event.currentTarget;
    const mylocalObj = {
      email: email.value,
      message: message.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(mylocalObj));
  }),
  500
);

form.addEventListener('submit', event => {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;

  console.log(`email: ${email.value} message: ${message.value}`);
  localStorage.clear();
  email.value = '';
  message.value = '';
});

// все работает
