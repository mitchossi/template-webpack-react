
require('normalize.css/normalize.css');
require('./styles/index.scss');
require('./js/main');

document.addEventListener("DOMContentLoaded", () => {

    const pluginsTriggerElement = document.getElementById('plugins-trigger');
    const pluginsElement = document.getElementById('plugins');

    const pluginsVisibleClass = "splash-overview-plugins__list--visible";

    if(pluginsTriggerElement) {
        pluginsTriggerElement.onclick = () => {
            pluginsElement.classList.toggle(pluginsVisibleClass);
        }
    }
    
});
