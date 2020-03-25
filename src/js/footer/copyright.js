function copyrightComponent() {
  const copyright = document.createElement('p');
  copyright.innerHTML = '&copy; Restaurant Logo, all rights reserved';
  copyright.classList.add('text-light-gray', 'text-center', 'm-0', 'copyright');

  return copyright;
}

export default copyrightComponent();
