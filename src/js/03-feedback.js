import throttle from 'lodash/throttle';

const form = document.querySelector('.feedback-form');

let mylocalObj = {};

function outputMessage() {
  try {
    const saveMessage = localStorage.getItem('feedback-form-state');
    if (!saveMessage) {
      return;
    }

    mylocalObj = JSON.parse(saveMessage);

    Object.entries(mylocalObj).forEach(([key, value]) => {
      form.elements[key].value = value;
    });
  } catch (error) {
    console.log(error);
  }
}

outputMessage();

form.addEventListener(
  'input',
  throttle(e => {
    mylocalObj[e.target.name] = e.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(mylocalObj));
  }),
  500
);

form.addEventListener('submit', event => {
  event.preventDefault();

  console.log(mylocalObj);
  mylocalObj = {};
  localStorage.removeItem('feedback-form-state');
  form.reset();
});
