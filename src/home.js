import MainImage from './home_image.jpg';

function mainHeadingComponent(headingText) {
  const heading = document.createElement('h1');
  heading.innerText = headingText;
  heading.classList.add('text-center');

  return heading;
}

function mainImageComponent() {
  const author = document.createElement('a');
  const site = document.createElement('a');
  const source = document.createElement('p');
  source.setAttribute('id', 'photo-source');
  author.innerText = 'Michael Busch';
  author.setAttribute('href', 'https://unsplash.com/@migelon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText');
  const textOne = document.createTextNode('Photo by ');
  const textTwo = document.createTextNode(' on ');
  site.innerText = 'Unsplash';
  site.setAttribute('href', 'https://unsplash.com/s/photos/chefs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText');
  source.appendChild(textOne);
  source.appendChild(author);
  source.appendChild(textTwo);
  source.appendChild(site);
  source.classList.add('text-center');
  const container = document.createElement('div');
  const imageContainer = document.createElement('div');
  const image = new Image();
  image.src = MainImage;
  image.setAttribute('id', 'home-image');
  imageContainer.appendChild(image);
  container.appendChild(imageContainer);
  container.appendChild(source);
  container.classList.add('home-image-container');

  return container;
}

function homeComponent() {
  const home = document.createElement('main');
  const mainHeading = mainHeadingComponent('Restaurant Logo');
  const mainImage = mainImageComponent();
  home.classList.add('page-content');
  home.appendChild(mainHeading);
  home.appendChild(mainImage);

  return home;
}

export default homeComponent;
