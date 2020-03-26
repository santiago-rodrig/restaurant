function headerComponent() {
  const header = document.createElement('header');
  const heading = document.createElement('h1');

  header.id = 'main-header';
  heading.innerText = 'Restaurant Logo';
  heading.classList.add('text-center');
  header.appendChild(heading);

  return header;
}

export default headerComponent();
