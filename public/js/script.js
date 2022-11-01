import addPhotoListeners from './photos.js'

const homepage = 'home';

window.onload = () => {
    setupNavigation();
}

const setupNavigation = () => {
    addNavListeners();
    navigate(homepage);
}

const addNavListeners = () => {
    document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => navigate(link.id)));
}

const navigate = (page) => {
    selectNavLink(page);
    const { content } = document.querySelector(`#${page}Template`);
    const contentSection = document.querySelector('#content');
    contentSection.replaceChildren();
    contentSection.appendChild(content.cloneNode(true));
    addEventListenerForPage(page);
}

// underline current page in navbar
const selectNavLink = (page) => {
    document.querySelectorAll('nav a').forEach(link => link.style.textDecoration = link.id === page ? 'underline' : 'none');
}

const addEventListenerForPage = (page) => {
    switch (page) {
        case 'photos':
            addPhotoListeners();
            break;
        default:
            break;
    }
}
