import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all';
import './scss/style.scss';
import browsingTabs from './browsing_tabs';

const content = document.getElementById('content');
content.appendChild(browsingTabs());
