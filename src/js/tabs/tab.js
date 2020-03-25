import ClickHandler from './events/click';

function tabBuilder(iconHTML, component, id) {
  const tab = document.createElement('div');
  tab.innerHTML = iconHTML;
  tab.component = component;
  tab.id = id;
  ClickHandler.attach('all', tab);

  tab.classList.add(
    'tab',
    'p-3',
    'pl-2'
  );

  return tab;
}

export default tabBuilder;
