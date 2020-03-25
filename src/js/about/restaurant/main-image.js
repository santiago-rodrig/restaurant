import ImageUtilities from '../../lib/images';
import MainImage from '../../../images/about/restaurant.jpg';

function restaurantImageComponent() {
  const container = document.createElement('div');
  const wrapper = document.createElement('div');

  const image = ImageUtilities.detailedImage(
    MainImage,
    'Christian Chen',
    'https://unsplash.com/@christianchen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    'https://unsplash.com/s/photos/restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
  );

  container.classList.add('about-image-container');
  wrapper.classList.add('about-image-wrapper');
  image.classList.add('about-image');
  wrapper.appendChild(image);
  container.appendChild(wrapper);
  container.appendChild(ImageUtilities.source(image));

  return container;
}

export default restaurantImageComponent();
