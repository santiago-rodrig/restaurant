import MainImage from '../../images/home/main.jpg';
import ImageUtilities from '../lib/images';

function mainImageComponent() {
  const container = document.createElement('div');
  const wrapper = document.createElement('div');

  const image = ImageUtilities.detailedImage(
    MainImage,
    'Michael Busch',
    'https://unsplash.com/@migelon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    'https://unsplash.com/s/photos/chefs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
  );

  container.id = 'main-image-container';
  wrapper.id = 'main-image-wrapper';
  image.id = 'main-image';
  wrapper.appendChild(image);
  container.appendChild(wrapper);
  container.appendChild(ImageUtilities.source(image));

  return container;
}

export default mainImageComponent();
