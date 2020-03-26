import MainImageComponent from './main-image';
import MainTextComponent from './main-text';
import EmailsComponent from './emails';
import PhonesComponent from './phones';

function contactComponent() {
  const container = document.createElement('div');
  const wrapper = document.createElement('div');
  const data = document.createElement('div');

  container.classList.add('pb-5');
  wrapper.appendChild(MainImageComponent);
  wrapper.classList.add('clearfix', 'px-2');
  wrapper.appendChild(MainTextComponent);
  wrapper.appendChild(data);
  data.classList.add('clearfix');
  data.id = 'contact-data';
  data.appendChild(EmailsComponent);
  data.appendChild(PhonesComponent);
  container.appendChild(wrapper);

  return container;
}

export default contactComponent();
