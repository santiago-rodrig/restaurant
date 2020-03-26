import ImageUtilities from '../../lib/images';
import dishBuilder from './dish';
import PastaImage from '../../../images/home/pasta.jpg';
import TacosImage from '../../../images/home/tacos.jpg';
import BurguerImage from '../../../images/home/burguer.jpg';
import PastaImageData from './pasta-image-data.csv';
import TacosImageData from './tacos-image-data.csv';
import BurguerImageData from './burguer-image-data.csv';
import PastaDescription from './pasta-description.txt';
import TacosDescription from './tacos-description.txt';
import BurguerDescription from './burguer-description.txt';

function dishesComponent() {
  const container = document.createElement('div');
  const heading = document.createElement('h2');
  const list = document.createElement('ul');
  const pastaImage = ImageUtilities.detailedImage(PastaImage, PastaImageData[0]);
  const tacosImage = ImageUtilities.detailedImage(TacosImage, TacosImageData[0]);
  const burguerImage = ImageUtilities.detailedImage(BurguerImage, BurguerImageData[0]);
  const pastaDescription = PastaDescription.replace(/\n/gi, ' ');
  const tacosDescription = TacosDescription.replace(/\n/gi, ' ');
  const burguerDescription = BurguerDescription.replace(/\n/gi, ' ');
  const pasta = dishBuilder('Pasta', pastaDescription, pastaImage, '$20');
  const tacos = dishBuilder('Tacos', tacosDescription, tacosImage, '$15');
  const burguer = dishBuilder('Hamburguer', burguerDescription, burguerImage, '$10');

  [pasta, tacos, burguer].forEach(a => list.appendChild(a));
  [heading, list].forEach(a => container.appendChild(a));
  heading.innerText = 'Dishes';
  heading.classList.add('text-center');
  list.classList.add('dishes');

  return container;
}

export default dishesComponent();
