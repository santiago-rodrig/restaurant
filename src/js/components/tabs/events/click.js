function clickHandler() {
  function color() {
    const tabs = document.getElementsByClassName('tab');
    let tab;

    for (let i = 0; i < tabs.length; i += 1) {
      tab = tabs[i];

      if (tab !== this) tab.classList.remove('border-left-primary');
    }

    if (!this.classList.contains('border-left-primary')) {
      this.classList.add('border-left-primary');
    }
  }

  function replace(component) {
    const content = document.getElementById('content');

    while (content.lastChild) content.removeChild(content.lastChild);

    content.appendChild(component);
    window.scrollTo(0, 0);
  }

  const attach = (node) => {
    node.addEventListener('click', color.bind(node));
    node.addEventListener('click', replace.bind(undefined, node.component));
  };

  return { attach };
}

export default clickHandler();
