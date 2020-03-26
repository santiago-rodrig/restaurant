function mainTextComponent() {
  const paragraph = document.createElement('p');

  paragraph.innerText = [
    'Our restaurant has been attending clients since 2001, all of them are now frequent customers of our business.',
    'Our founder is Mr. Founder, a great man with huge dreams, and of course, one of his dreams was this restaurant.',
    'Restaurant Logo started being a small establishment, but soon enough our food quality raised us until we reached what we are today.',
    'Today we have a team of 15 cooks, and enough tables for attending a small army.'
  ].join(' ');

  paragraph.classList.add('about-text');

  return paragraph;
}

export default mainTextComponent();
