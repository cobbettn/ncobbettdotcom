const setupNavigation = () => {
    addNavListeners();
    navigate('home');
}

const addNavListeners = () => {
    document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => navigate(link.id)));
}

const navigate = (page) => {
    updateNavbar(page);
    updateContent(page);
}

const updateNavbar = (page) => {
    document.querySelectorAll('nav a').forEach(link => link.style.textDecoration = link.id === page ? 'underline' : 'none');
}

const updateContent = (page) => {
    const contentSection = document.querySelector('#content');
    const { content } = document.querySelector(`#${page}Template`);
    contentSection.replaceChildren();
    contentSection.appendChild(content.cloneNode(true));
    addPageEventListeners(page);
}

const addPageEventListeners = (page) => {
    switch (page) {
        case 'photos':
            addPhotoListeners();
            break;
        default:
            break;
    }
}

export default setupNavigation;