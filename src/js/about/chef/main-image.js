import ImageUtilities from '../../lib/images';
import MainImage from '../../../images/about/chef.jpg';

function mainImageComponent() {
  const container = document.createElement('div');
  const wrapper = document.createElement('div');

  const image = ImageUtilities.detailedImage(
    MainImage,
    'Hermant Latawa',
    'https://unsplash.com/@hemantlatawa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    'https://unsplash.com/s/photos/chef?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
  );

  container.classList.add('about-image-container');
  wrapper.classList.add('about-image-wrapper');
  image.classList.add('about-image');
  wrapper.appendChild(image);
  container.appendChild(wrapper);
  container.appendChild(ImageUtilities.source(image));

  return container;
}

export default mainImageComponent();
