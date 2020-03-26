function mainHeadingComponent() {
  const heading = document.createElement('h2');

  heading.innerText = 'A Great Team';
  heading.classList.add('text-center');

  return heading;
}

export default mainHeadingComponent();
