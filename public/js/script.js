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
    addEventListenerForPage(page);
}

// underline current page in navbar
const selectNavLink = (page) => {
    document.querySelectorAll('nav a').forEach(link => link.style.textDecoration = link.id === page ? 'underline' : 'none');
}

const addNavListeners = () => {
    document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => navigate(link.id)));
}

const totalPhotos = 27; // change this when photos are added
let currentPhotoIndex = 1;

const addEventListenerForPage = (page) => {
    switch (page) {
        case 'photos':
            addPhotoListeners();
            break;
        default:
            break;
    }
}

const addPhotoListeners = () => {
    const currentPhoto = document.querySelector('#currentPhoto');
    document.querySelector('#nextPhoto').addEventListener('click', () => {
        if (currentPhotoIndex < totalPhotos) {
            currentPhotoIndex++;
            currentPhoto.src = `public/assets/photos/${currentPhotoIndex}.jpg`;
        }
    });
    document.querySelector('#prevPhoto').addEventListener('click', () => {
        if (currentPhotoIndex > 1) {
            currentPhotoIndex--;
            currentPhoto.src = `public/assets/photos/${currentPhotoIndex}.jpg`;
        }
    });
}
