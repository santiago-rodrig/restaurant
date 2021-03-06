import MainImageComponent from './main-image';
import MainTextComponent from './main-text';
import MainHeadingComponent from './main-heading';

function chefComponent() {
  const container = document.createElement('div');
  const wrapper = document.createElement('div');
  const separator = document.createElement('hr');

  wrapper.id = 'about-middle-section';
  wrapper.classList.add('about-section');
  wrapper.append(MainHeadingComponent, MainImageComponent, MainTextComponent);
  container.append(separator, wrapper);

  return container;
}

export default chefComponent();
