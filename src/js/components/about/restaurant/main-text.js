import TextData from './main-text-data.txt';

function mainTextComponent() {
  const paragraph = document.createElement('p');

  paragraph.innerText = TextData.replace(/\n/gi, ' ');
  paragraph.classList.add('about-text');

  return paragraph;
}

export default mainTextComponent();
