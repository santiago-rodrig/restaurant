import MainImage from '../../../images/contact/main.jpg';
import ImageUtilities from '../../lib/images';

function mainImageComponent() {
  const image = ImageUtilities.detailedImage(
    MainImage,
    'Febrian Zakaria',
    'https://unsplash.com/@febrianzakaria?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    'https://unsplash.com/s/photos/chef?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
  );

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
