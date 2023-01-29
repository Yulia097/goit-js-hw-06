const textFont = document.querySelector('#font-size-control');
const styleOfText = document.querySelector('#text');

textFont.addEventListener('input', changeFont);

function changeFont(font) {
  styleOfText.style.fontSize = `${font.currentTarget.value}px`;
}
