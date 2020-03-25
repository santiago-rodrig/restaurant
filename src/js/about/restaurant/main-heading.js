function mainHeadingComponent() {
  const heading = document.createElement('h2');

  heading.innerText = 'Our Restaurant';
  heading.classList.add('text-center');

  return heading;
}

export default mainHeadingComponent();
