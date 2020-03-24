import MainImage from './contact_main.jpg';

function headingComponent() {
  const heading = document.createElement('h1');
  heading.innerText = 'Restaurant Logo';
  heading.classList.add('text-center');

  return heading;
}

function mainImageComponent() {
  const author = document.createElement('a');
  const site = document.createElement('a');
  const source = document.createElement('p');
  author.innerText = 'Febrian Zakaria';
  author.setAttribute('href', 'https://unsplash.com/@febrianzakaria?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText');
  const textOne = document.createTextNode('Photo by ');
  const textTwo = document.createTextNode(' on ');
  site.innerText = 'Unsplash';
  site.setAttribute('href', 'https://unsplash.com/s/photos/chef?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText');
  source.appendChild(textOne);
  source.appendChild(author);
  source.appendChild(textTwo);
  source.appendChild(site);
  source.classList.add('text-center', 'photo-source');
  const container = document.createElement('div');
  const imageContainer = document.createElement('div');
  const image = new Image();
  image.src = MainImage;
  image.setAttribute('id', 'main-image');
  imageContainer.appendChild(image);
  imageContainer.classList.add('main-image-wrapper');
  container.appendChild(imageContainer);
  container.appendChild(source);
  container.classList.add('main-image-container');

  return container;
}

function contactComponent() {
  const contact = document.createElement('div');
  contact.classList.add('main-content', 'page-content');
  const heading = headingComponent();
  contact.appendChild(heading);
  const mainContainer = document.createElement('div');
  mainContainer.appendChild(mainImageComponent());
  mainContainer.classList.add('clearfix');
  contact.appendChild(mainContainer);

  return contact;
}

export default contactComponent;
