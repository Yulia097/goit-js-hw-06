const textInput = document.querySelector('#validation-input');
const dataAttribute = textInput.getAttribute('data-length');
textInput.addEventListener('blur', onBlur);

function onBlur(event) {
  if (event.currentTarget.value.length == dataAttribute) {
    textInput.classList.remove('invalid');
    textInput.classList.add('valid');
  } else {
    textInput.classList.add('invalid');
    textInput.classList.remove('valid');
  }
}
