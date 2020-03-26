const clickHandler = (function() {
  function color() {
    for (const tab of document.getElementsByClassName('tab')) {
      if (tab !== this) {
        tab.classList.remove('border-left-primary');
      }
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

  const attach = (which, node) => {
    switch (which) {
      case 'all':
        node.addEventListener('click', color.bind(node));
        node.addEventListener('click', replace.bind(undefined, node.component));
        break;
    }
  }

  return { attach };
})();

export default clickHandler;
