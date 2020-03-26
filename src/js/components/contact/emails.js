import emailBuilder from './email';

function emailsComponent() {
  const container = document.createElement('div');
  const separator = document.createElement('hr');
  const heading = document.createElement('h2');
  const emails = document.createElement('ul');
  const emailOne = emailBuilder('main.email@example.com');
  const emailTwo = emailBuilder('alternative.email@example.com');

  heading.innerText = 'Emails';
  separator.classList.add('contact-separator');
  heading.classList.add('text-center');
  emails.classList.add('text-center');
  emails.id = 'emails';
  container.id = 'emails-container';
  container.appendChild(separator);
  container.appendChild(heading);
  container.appendChild(emails);
  emails.appendChild(emailOne);
  emails.appendChild(emailTwo);

  return container;
}

export default emailsComponent();
