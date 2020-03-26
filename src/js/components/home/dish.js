import ImageUtilities from '../../lib/images';

function dishBuilder(name, description, image, price) {
  const item = document.createElement('li');
  item.classList.add('dish', 'p-4');
  const imageContainer = document.createElement('div');
  imageContainer.appendChild(image);
  imageContainer.appendChild(ImageUtilities.source(image));
  const title = document.createElement('div');
  title.innerText = name;
  title.classList.add('dish-title', 'text-center');
  const priceSpan = document.createElement('span');
  priceSpan.innerText = price;
  priceSpan.classList.add('price');
  title.appendChild(priceSpan);
  const leftContainer = document.createElement('div');
  const rightContainer = document.createElement('div');
  leftContainer.appendChild(imageContainer);
  leftContainer.appendChild(title);
  leftContainer.classList.add('dish-left');
  const descriptionParagraph = document.createElement('p');
  descriptionParagraph.innerText = description;
  rightContainer.appendChild(descriptionParagraph);
  rightContainer.classList.add('dish-right');
  item.appendChild(leftContainer);
  item.appendChild(rightContainer);

  return item;
}

export default dishBuilder;
