function socialLinkBuilder(icon, url) {
  const item = document.createElement('li');
  const socialLink = document.createElement('a');

  item.classList.add('footer-link');
  socialLink.innerHTML = icon;
  socialLink.href = url;
  item.appendChild(socialLink);

  return item;
}

export default socialLinkBuilder;
