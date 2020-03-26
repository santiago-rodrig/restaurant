import MainImage from '../../../images/home/main.jpg';
import ImageUtilities from '../../lib/images';
import MainImageData from './main-image-data.csv';

function mainImageComponent() {
  const container = document.createElement('div');
  const wrapper = document.createElement('div');
  const image = ImageUtilities.detailedImage(MainImage, MainImageData[0]);

  container.id = 'main-image-container';
  wrapper.id = 'main-image-wrapper';
  image.id = 'main-image';
  wrapper.appendChild(image);
  container.appendChild(wrapper);
  container.appendChild(ImageUtilities.source(image));

  return container;
}

export default mainImageComponent();
