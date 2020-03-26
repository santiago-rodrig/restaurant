import CopyrightComponent from './copyright';
import SocialLinksComponent from './social-links';

function footerComponent() {
  const footer = document.createElement('footer');
  const copyright = CopyrightComponent;
  const socialLinks = SocialLinksComponent;

  footer.id = 'main-footer';
  footer.classList.add('bg-black', 'py-5', 'mt-5');
  footer.appendChild(socialLinks);
  footer.appendChild(copyright);

  return footer;
}

export default footerComponent();
