function phonesComponent() {
  const container = document.createElement('div');
  const separator = document.createElement('hr');
  const heading = document.createElement('h2');
  const phones = document.createElement('ul');
  const phoneOne = document.createElement('li');
  const phoneTwo = document.createElement('li');

  heading.innerText = 'Phones';
  phoneOne.innerText = '+1-541-754-3010';
  phoneTwo.innerText = '+1-145-457-0103';
  separator.classList.add('contact-separator');
  heading.classList.add('text-center');
  phones.classList.add('text-center');
  phones.id = 'phones';
  container.id = 'phones-container';
  container.appendChild(separator);
  container.appendChild(heading);
  container.appendChild(phones);
  phones.appendChild(phoneOne);
  phones.appendChild(phoneTwo);

  return container;
}

export default phonesComponent();
