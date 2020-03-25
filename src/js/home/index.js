import MainImageComponent from './main-image';
import ImageUtilities from '../lib/images';
import MainTextComponent from './main-text';
import DishesComponent from './dishes';

function homeComponent() {
  const container = document.createElement('div');
  const mainImage = MainImageComponent;
  const mainText = MainTextComponent;
  const dishes = DishesComponent;
  const separator = document.createElement('hr');
  const mainContainer = document.createElement('div');

  for (const elem of [mainImage, mainText]) mainContainer.appendChild(elem);
  for (const elem of [mainContainer, separator, dishes]) container.appendChild(elem);

  mainContainer.classList.add('clearfix');

  return container;
}

export default homeComponent();
