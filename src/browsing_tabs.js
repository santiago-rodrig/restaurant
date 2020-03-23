function colorClickHandler(tabs) {
  for (let tab of tabs) {
    tab.classList.remove('border-left-primary');
  }

  this.classList.toggle('border-left-primary');
}

function removeColorClickHandler(tab, otherTabs) {
  tab.removeEventListener('click', colorClickHandler.bind(tab, otherTabs));
}

function attachColorClickHandler(tab, otherTabs) {
  tab.addEventListener('click', colorClickHandler.bind(tab, otherTabs));
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
  homeTab.classList.add('border-left-primary');
  const contactTab = tabComponent(contactIcon);
  const helpTab = tabComponent(helpIcon);
  attachColorClickHandler(homeTab, [contactTab, helpTab]);
  attachColorClickHandler(contactTab, [homeTab, helpTab]);
  attachColorClickHandler(helpTab, [contactTab, homeTab]);
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
