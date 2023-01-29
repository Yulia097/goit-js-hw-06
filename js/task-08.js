const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;

  const userDetails = { email: email.value, Password: password.value };

  if (email.value === '' || password.value === '') {
    return alert('Please fill in all the fields!');
  }

  console.log(userDetails);
  event.currentTarget.reset();
}
