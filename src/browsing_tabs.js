import HomeComponent from './home';
import ContactComponent from './contact';
// import HelpComponent from './help';

function colorClickHandler(tabs) {
  for (let tab of tabs) {
    tab.classList.remove('border-left-primary');
  }

  if (!this.classList.contains('border-left-primary')) {
    this.classList.add('border-left-primary');
  }
}

function replaceClickHandler() {
  const content = document.getElementById('content');
  const mainContent = document.getElementsByClassName('main-content')[0];
  if (mainContent) content.removeChild(mainContent);
  const footer = content.lastChild;
  content.removeChild(footer);
  content.appendChild(this);
  content.appendChild(footer);
}

function removeColorClickHandler(tab, otherTabs) {
  tab.removeEventListener('click', colorClickHandler.bind(tab, otherTabs));
}

function attachColorClickHandler(tab, otherTabs) {
  tab.addEventListener('click', colorClickHandler.bind(tab, otherTabs));
}

function attachReplaceClickHandler(tab, component) {
  tab.addEventListener('click', replaceClickHandler.bind(component));
}

function tabComponent(iconHTML) {
  const tab = document.createElement('div');
  tab.innerHTML = iconHTML;

  tab.classList.add(
    'browsing-tab',
    'p-5',
    'pl-4'
  );

  return tab;
}

function browsingTabs() {
  const tabs = document.createElement('div');
  const homeIcon = '<i class="fas fa-home"></i>';
  const contactIcon = '<i class="fas fa-address-card"></i>';
  const helpIcon = '<i class="fas fa-question"></i>';
  const homeTab = tabComponent(homeIcon);
  const contactTab = tabComponent(contactIcon);
  const helpTab = tabComponent(helpIcon);
  attachColorClickHandler(homeTab, [contactTab, helpTab]);
  attachColorClickHandler(contactTab, [homeTab, helpTab]);
  attachColorClickHandler(helpTab, [contactTab, homeTab]);
  attachReplaceClickHandler(homeTab, HomeComponent());
  attachReplaceClickHandler(contactTab, ContactComponent());
  // attachReplaceClickHandler(helpTab, HelpComponent());
  const tabCollection = [homeTab, contactTab, helpTab];

  for (const tab of tabCollection) {
    tabs.appendChild(tab);
  }

  tabs.classList.add(
    'bg-light-gray',
    'fixed-left'
  );

  return tabs;
}

export default browsingTabs;
