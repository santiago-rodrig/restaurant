function mainHeadingComponent() {
  const heading = document.createElement('h2');

  heading.innerText = 'The Chef';
  heading.classList.add('text-center');

  return heading;
}

export default mainHeadingComponent();
