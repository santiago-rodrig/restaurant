import TextData from './main-text-data.txt';

function mainTextComponent() {
  const container = document.createElement('div');
  const paragraph = document.createElement('p');

  paragraph.innerHTML = TextData.replace(/\n/gi, ' ');
  container.appendChild(paragraph);
  container.id = 'main-text';

  return container;
}

export default mainTextComponent();
