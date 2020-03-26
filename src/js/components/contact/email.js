function emailBuilder(email) {
  const item = document.createElement('li');
  const emailLink = document.createElement('a');

  emailLink.innerText = email;
  emailLink.target = '_blank';

  emailLink.href = [
    'mailto:',
    email,
    '?Subject=I%20want%20to%20make%20a%20reservation',
  ].join('');

  item.appendChild(emailLink);

  return item;
}

export default emailBuilder;
