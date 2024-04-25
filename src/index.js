import './style.css';
import showHomeContents from './home';
import showMenuContent from './menu';
import showAboutContent from './about';

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");

const content = document.querySelector('#content');


homeButton.addEventListener("click", () => {
    clearContent();
    showHomeContents();
});

menuButton.addEventListener("click", () => {
    clearContent();
    showMenuContent();
});

aboutButton.addEventListener("click", () => {
    clearContent();
    showAboutContent();
});

function clearContent() {
    content.innerHTML = "";
}

showHomeContents();