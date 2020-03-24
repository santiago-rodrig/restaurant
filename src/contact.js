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

function mainTextComponent() {
  const container = document.createElement('div');
  const paragraphOne = document.createElement('p');

  const paragraphOneSentencesOne = [
    'I\'m sure you want to contact with us as soon as possible.',
    'You can reach to us via email or phone, that way yo can make a reservation.',
    'We are open 24/7, so call us or email us whenever you want!',
    'Just in case, our address is:',
  ];

  const direction = document.createElement('strong');
  direction.innerText = ' Local 17, Beverly Mall, Main Avenue, California, U.S.A';

  const paragraphOneSentencesTwo = [
    '. We are eager to attend you!',
    'Don\'t forget about sharing your experience with your friends and family!'
  ];

  const paragraphOneTextOne = document.createTextNode(paragraphOneSentencesOne.join(' '));
  const paragraphOneTextTwo = document.createTextNode(paragraphOneSentencesTwo.join(' '));
  paragraphOne.appendChild(paragraphOneTextOne);
  paragraphOne.appendChild(direction);
  paragraphOne.appendChild(paragraphOneTextTwo);
  container.appendChild(paragraphOne);
  container.classList.add('main-text');

  return container;
}

function emailComponent(email) {
  const item = document.createElement('li');
  const link = document.createElement('a');
  link.innerText = email;
  link.target = '_blank';

  link.href = [
    'mailto:',
    email,
    '?Subject=I%20want%20to%20make%20a%20reservation'
  ].join('');

  item.appendChild(link);

  return item;
}

function emailsComponent() {
  const container = document.createElement('div');
  const separator = document.createElement('hr');
  separator.classList.add('contact-separator');
  const heading = document.createElement('h2');
  heading.innerText = 'Emails';
  heading.classList.add('text-center');
  const emails = document.createElement('ul');
  const emailOne = emailComponent('main.email@example.com');
  const emailTwo = emailComponent('alternative.email@example.com');
  emails.appendChild(emailOne);
  emails.appendChild(emailTwo);
  emails.classList.add('text-center', 'contact-emails');
  container.appendChild(separator);
  container.appendChild(heading);
  container.appendChild(emails);
  container.classList.add('emails');

  return container;
}

function phonesComponent() {
  const container = document.createElement('div');
  const separator = document.createElement('hr');
  separator.classList.add('contact-separator');
  const heading = document.createElement('h2');
  heading.innerText = 'Phones';
  heading.classList.add('text-center');
  const phones = document.createElement('ul');
  const phoneOne = document.createElement('li');
  const phoneTwo = document.createElement('li');
  phoneOne.innerText = '+1-541-754-3010';
  phoneTwo.innerText = '+1-145-457-0103';
  phones.appendChild(phoneOne);
  phones.appendChild(phoneTwo);
  phones.classList.add('text-center', 'contact-phones');
  container.appendChild(separator);
  container.appendChild(heading);
  container.appendChild(phones);
  container.classList.add('phones');

  return container;
}

function contactComponent() {
  const contact = document.createElement('div');
  contact.classList.add('main-content', 'page-content', 'pb-5');
  const heading = headingComponent();
  contact.appendChild(heading);
  const mainContainer = document.createElement('div');
  mainContainer.appendChild(mainImageComponent());
  mainContainer.classList.add('clearfix', 'px-2');
  mainContainer.appendChild(mainTextComponent());
  const dataContainer = document.createElement('div');
  dataContainer.classList.add('clearfix');
  dataContainer.classList.add('contact-data');
  dataContainer.appendChild(emailsComponent());
  dataContainer.appendChild(phonesComponent());
  mainContainer.appendChild(dataContainer);
  contact.appendChild(mainContainer);

  return contact;
}

export default contactComponent;
