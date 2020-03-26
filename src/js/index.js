/* eslint-disable import/no-unresolved */

import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all';

/* eslint-enable import/no-unresolved */

import '../scss/style.scss';
import TabsComponent from './components/tabs/index';
import HeaderComponent from './components/header/index';
import FooterComponent from './components/footer/index';

const {
  head, body, charset, content,
} = {
  head: document.head,
  body: document.body,
  charset: document.createElement('meta'),
  content: document.createElement('div'),
};

charset.setAttribute('charset', 'UTF-8');
content.id = 'content';
content.classList.add('px-5');
head.appendChild(charset);
body.appendChild(TabsComponent);
body.appendChild(HeaderComponent);
body.appendChild(content);
body.appendChild(FooterComponent);
document.getElementById('home-tab').dispatchEvent(new Event('click'));
