function headerComponent() {
  const header = document.createElement('header');
  const heading = document.createElement('h1');

  heading.classList.add('text-center');
  heading.innerText = 'Restaurant Logo';
  header.appendChild(heading);

  return header;
}

export default headerComponent();
