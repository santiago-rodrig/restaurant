import MainImageComponent from './main-image';
import MainTextComponent from './main-text';
import DishesComponent from './dishes';

function homeComponent() {
  const container = document.createElement('div');
  const mainImage = MainImageComponent;
  const mainText = MainTextComponent;
  const dishes = DishesComponent;
  const separator = document.createElement('hr');
  const mainContainer = document.createElement('div');

  [mainImage, mainText].forEach(a => mainContainer.appendChild(a));
  [mainContainer, separator, dishes].forEach(a => container.appendChild(a));
  mainContainer.classList.add('clearfix');

  return container;
}

export default homeComponent();
