import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all';
import './scss/style.scss';
import BrowsingTabsComponent from './browsing_tabs';
import FooterComponent from './footer';

const content = document.getElementById('content');
const tabs = BrowsingTabsComponent();
content.appendChild(tabs);
content.appendChild(FooterComponent());
tabs.children[0].dispatchEvent(new Event('click'));
