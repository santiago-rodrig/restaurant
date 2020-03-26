import ImageUtilities from '../../lib/images';
import dishBuilder from './dish';
import PastaImage from '../../../images/home/pasta.jpg';
import TacosImage from '../../../images/home/tacos.jpg';
import BurguerImage from '../../../images/home/burguer.jpg';

function dishesComponent() {
  const container = document.createElement('div');
  const heading = document.createElement('h2');
  const list = document.createElement('ul');

  const pastaImage = ImageUtilities.detailedImage(
    PastaImage,
    'Krista Stucchio',
    'https://unsplash.com/@kristastucchio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    'https://unsplash.com/s/photos/pasta?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
  );

  const tacosImage = ImageUtilities.detailedImage(
    TacosImage,
    'Edgar Castrejon',
    'https://unsplash.com/@edgarraw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    'https://unsplash.com/s/photos/tacos?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
  );

  const burguerImage = ImageUtilities.detailedImage(
    BurguerImage,
    'Léo Roza',
    'https://unsplash.com/@leoroza?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
    'https://unsplash.com/s/photos/hamburguer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'
  );

  const pastaDescription = [
    'A delicious dish, you\'ll love it, it is not just pasta, it is the best pasta.',
    'Our chef cooks the best pasta! I assure you you\'ll not regret it at all.',
    'In the impossible case of you not liking the pasta, we\'ll give you your money back'
  ].join(' ');

  const tacosDescription = [
    'We are proud of our tacos, and surely you\'ll be proud of yourself for finding the perfect tacos in our restaurant.',
    'Our establishment could easily win an international tacos competition!',
    'If you are not convinced with these words, you can come and try them.'
  ].join(' ');

  const burguerDescription = [
    'Never underestimate the power and taste of a hamburguer, they are great!',
    'And even greater are our hamburguers, made by true professionals.',
    'Take a chance to taste our awesome hamburguers!'
  ].join(' ');

  const pasta = dishBuilder('Pasta', pastaDescription, pastaImage, '$20');
  const tacos = dishBuilder('Tacos', tacosDescription, tacosImage, '$15');
  const burguer = dishBuilder('Hamburguer', burguerDescription, burguerImage, '$10');

  for (const dish of [pasta, tacos, burguer]) list.appendChild(dish);
  for (const elem of [heading, list]) container.appendChild(elem);

  heading.innerText = 'Dishes';
  heading.classList.add('text-center');
  list.classList.add('dishes');

  return container;
}

export default dishesComponent();
