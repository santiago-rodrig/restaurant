function headingComponent() {
  const heading = document.createElement('h1');
  heading.innerText = 'Restaurant Logo';
  heading.classList.add('text-center');

  return heading;
}

function contactComponent() {
  const contact = document.createElement('div');
  const heading = headingComponent();
  contact.appendChild(heading);
  contact.classList.add('main-content', 'page-content');

  return contact;
}

export default contactComponent;
