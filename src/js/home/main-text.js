function mainTextComponent() {
  const container = document.createElement('div');
  const paragraph = document.createElement('p');
  const direction = document.createElement('strong');

  const textOne = document.createTextNode([
    'Ever wanted to eat in a restaurant where food is tasty, and people is nice?',
    'Well, that\'s what this restaurant has to offer.',
    'Our business has been around since 2001, and our customers always walk away happy.',
    'Take some time to visit us! We are located at the following address:'
  ].join(' '));

  const textTwo = document.createTextNode([
    '. We will be waiting for you!',
    'And when you taste our meals, you\'ll want to tell everyone about us!'
  ].join(' '));

  for (const node of [textOne, direction, textTwo]) paragraph.appendChild(node);

  direction.innerText = ' Local 17, Beverly Mall, Main Avenue, California, U.S.A';
  container.appendChild(paragraph);
  container.id = 'main-text';

  return container;
}

export default mainTextComponent();
