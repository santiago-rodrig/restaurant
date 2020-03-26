import HomeComponent from '../home/index';
import ContactComponent from '../contact/index';
import AboutComponent from '../about/index';
import tabBuilder from './tab';

function tabsComponent() {
  const tabs = document.createElement('div');

  const homeTab = tabBuilder(
    '<i class="fas fa-home"></i>',
    HomeComponent,
    'home-tab',
  );

  const contactTab = tabBuilder(
    '<i class="fas fa-address-card"></i>',
    ContactComponent,
    'contact-tab',
  );

  const aboutTab = tabBuilder(
    '<i class="fas fa-question-circle"></i>',
    AboutComponent,
    'about-tab',
  );

  [homeTab, contactTab, aboutTab].forEach(tab => tabs.appendChild(tab));

  tabs.classList.add('bg-light-gray', 'fixed-left');

  return tabs;
}

export default tabsComponent();
