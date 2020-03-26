import MainImage from '../../../images/contact/main.jpg';
import ImageUtilities from '../../lib/images';
import MainImageData from './main-image-data.csv';

function mainImageComponent() {
  const image = ImageUtilities.detailedImage(MainImage, MainImageData[0]);
  const source = ImageUtilities.source(image);
  const container = document.createElement('div');
  const wrapper = document.createElement('div');

  image.id = 'main-image';
  wrapper.id = 'main-image-wrapper';
  container.id = 'main-image-container';
  wrapper.appendChild(image);
  container.appendChild(wrapper);
  container.appendChild(source);

  return container;
}

export default mainImageComponent();
