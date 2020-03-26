import socialLinkBuilder from './social-link';

function socialLinksComponent() {
  const socialLinks = document.createElement('ul');
  const linkedInLink = socialLinkBuilder('<i class="fab fa-linkedin"></i>', '#');
  const twitterLink = socialLinkBuilder('<i class="fab fa-twitter-square"></i>', '#');

  socialLinks.appendChild(linkedInLink);
  socialLinks.appendChild(twitterLink);
  socialLinks.classList.add('footer-links', 'pl-0');

  return socialLinks;
}

export default socialLinksComponent();
