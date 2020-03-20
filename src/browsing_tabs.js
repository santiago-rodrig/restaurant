function tabComponent(iconHTML) {
  const contactTab = document.createElement('div');
  contactTab.innerHTML = iconHTML;

  contactTab.classList.add(
    'browsing-tab',
    'p-5',
    'pl-4'
  );

  return contactTab;
}

function browsingTabs() {
  const tabs = document.createElement('div');
  const homeIcon = '<i class="fas fa-home"></i>';
  const contactIcon = '<i class="fas fa-address-card"></i>';
  const helpIcon = '<i class="fas fa-question"></i>';
  tabs.appendChild(tabComponent(homeIcon));
  tabs.appendChild(tabComponent(contactIcon));
  tabs.appendChild(tabComponent(helpIcon));

  tabs.classList.add(
    'bg-light-gray',
    'fixed-left'
  );

  return tabs;
}

export default browsingTabs;
