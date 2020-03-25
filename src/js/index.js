import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all';
import '../scss/style.scss';
import TabsComponent from './tabs/index';
import HeaderComponent from './header/index';
import FooterComponent from './footer/index';

const head = document.head;
const body = document.body;
const charset = document.createElement('meta');
const content = document.createElement('div');

charset.setAttribute('charset', 'UTF-8');
content.id = 'content';
content.classList.add('px-5');
head.appendChild(charset);
body.appendChild(TabsComponent);
body.appendChild(HeaderComponent);
body.appendChild(content);
body.appendChild(FooterComponent);
document.getElementById('home-tab').dispatchEvent(new Event('click'));
