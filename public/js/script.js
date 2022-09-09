window.onload = () => {
    addNavListeners();
    navigate('about');
}

const navigate = (page) => {
    selectNavLink(page);
    const { content } = document.querySelector(`#${page}Template`);
    const contentSection = document.querySelector('#content');
    contentSection.replaceChildren();
    contentSection.appendChild(content.cloneNode(true));
}

const selectNavLink = (page) => {
    document.querySelectorAll('nav a').forEach(link => link.style.textDecoration = link.id === page ? 'underline' : 'none');
}

const addNavListeners = () => {
    document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => navigate(link.id)));
}