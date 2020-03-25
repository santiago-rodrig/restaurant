import MainImageComponent from './main-image';
import MainTextComponent from './main-text';
import MainHeadingComponent from './main-heading';

function restaurantComponent() {
  const container = document.createElement('div');

  container.classList.add('clearfix');
  container.appendChild(MainHeadingComponent);
  container.appendChild(MainImageComponent);
  container.appendChild(MainTextComponent);

  return container;
}

export default restaurantComponent();
