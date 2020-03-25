function mainTextComponent() {
  const container = document.createElement('div');
  const paragraph = document.createElement('p');
  const direction = document.createElement('strong');

  const textOne = document.createTextNode([
    'I\'m sure you want to contact with us as soon as possible.',
    'You can reach to us via email or phone, that way yo can make a reservation.',
    'We are open 24/7, so call us or email us whenever you want!',
    'Just in case, our address is:',
  ].join(' '));

  const textTwo = document.createTextNode([
    '. We are eager to attend you!',
    'Don\'t forget about sharing your experience with your friends and family!'
  ].join(' '));

  for (const node of [textOne, direction, textTwo]) paragraph.appendChild(node);

  direction.innerText = ' Local 17, Beverly Mall, Main Avenue, California, U.S.A';
  container.appendChild(paragraph);
  container.id = 'main-text';

  return container;
}

export default mainTextComponent();
