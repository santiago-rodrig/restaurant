function socialLinkComponent(icon, url) {
  const item = document.createElement('li');
  item.classList.add('footer-link');
  const link = document.createElement('a');
  link.innerHTML = icon;
  link.href = url;
  item.appendChild(link);

  return item;
}

function socialLinksComponent() {
  const links = document.createElement('ul');
  const linkedIn = socialLinkComponent('<i class="fab fa-linkedin"></i>', '#');
  const twitter = socialLinkComponent('<i class="fab fa-twitter-square"></i>', '#');
  links.appendChild(linkedIn);
  links.appendChild(twitter);
  links.classList.add('footer-links', 'pl-0');

  return links;
}

function copyrightComponent() {
  const copyright = document.createElement('p');
  copyright.innerHTML = '&copy; Restaurant Logo, all rights reserved';
  copyright.classList.add('text-light-gray', 'text-center', 'm-0', 'copyright');

  return copyright;
}

function footerComponent() {
  const footer = document.createElement('footer');
  footer.id = 'main-footer';
  footer.classList.add('bg-black', 'py-5', 'mt-5');
  const copyright = copyrightComponent();
  const links = socialLinksComponent();
  footer.appendChild(links);
  footer.appendChild(copyright);

  return footer;
}

export default footerComponent;
