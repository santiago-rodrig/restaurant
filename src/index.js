import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all';
import './scss/style.scss';
import browsingTabs from './browsing_tabs';
import home from './home';

const content = document.getElementById('content');
content.appendChild(browsingTabs());
content.appendChild(home());
