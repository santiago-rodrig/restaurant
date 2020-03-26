import ImageUtilities from '../../../lib/images';
import MainImage from '../../../../images/about/chef.jpg';
import MainImageData from './main-image-data.csv';

function mainImageComponent() {
  const container = document.createElement('div');
  const wrapper = document.createElement('div');
  const image = ImageUtilities.detailedImage(MainImage, MainImageData[0]);

  container.classList.add('about-image-container');
  wrapper.classList.add('about-image-wrapper');
  image.classList.add('about-image');
  wrapper.appendChild(image);
  container.appendChild(wrapper);
  container.appendChild(ImageUtilities.source(image));

  return container;
}

export default mainImageComponent();
