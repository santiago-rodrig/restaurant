import HomeComponent from '../home/index';
import ContactComponent from '../contact/index';
import tabBuilder from './tab';

function tabsComponent() {
  const tabs = document.createElement('div');

  const homeTab = tabBuilder(
    '<i class="fas fa-home"></i>',
    HomeComponent,
    'home-tab'
  );

  const contactTab = tabBuilder(
    '<i class="fas fa-address-card"></i>',
    ContactComponent,
    'contact-tab'
  );

  for (const tab of [homeTab, contactTab]) tabs.appendChild(tab);

  tabs.classList.add('bg-light-gray', 'fixed-left');

  return tabs;
}

export default tabsComponent();
