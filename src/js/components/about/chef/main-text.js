function mainTextComponent() {
  const paragraph = document.createElement('p');

  paragraph.innerText = [
    'The chef has been working with us since the very beginning, always loyal to our goals and objectives.',
    'Meet John Doe, an internationally recognized cook, and knower of a host of recipes (a huge one).',
    'You can have a speech with him anytime he\'s not too busy, he doesn\'t bite!'
  ].join(' ');

  paragraph.classList.add('about-text');

  return paragraph;
}

export default mainTextComponent();
