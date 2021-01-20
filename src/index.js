import { pageLoad } from './modules/page-load'
import { homePage } from './modules/home-page'
import { menuPage } from './modules/menu-page'
 
window.onload = init;

function init() {
    pageLoad();
    homePage();
    addNavEvents(); 
}

function addNavEvents() {
    const homeBtn = document.querySelector('[data-tab-home]');
    const menuBtn = document.querySelector('[data-tab-menu]');

    homeBtn.addEventListener('click', homePage);
    menuBtn.addEventListener('click', menuPage);
}