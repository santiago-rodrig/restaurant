function mainHeadingComponent(headingText) {
  const heading = document.createElement('h1');
  heading.innerText = headingText;
  heading.classList.add('text-center');

  return heading;
}

function homeComponent() {
  const home = document.createElement('main');
  const mainHeading = mainHeadingComponent('Restaurant Logo');
  home.classList.add('page-content');
  home.appendChild(mainHeading);

  return home;
}

export default homeComponent;
