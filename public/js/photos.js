const totalPhotos = 27; // update this count when photos are added/removed
const thumbnails = 4;
let thumbnailPage = 0;
let photo = 0;

const updateThumbnails = () => {
    const index = thumbnailPage * thumbnails;
    const thumbnailContainer = document.querySelector('#thumbnails');
    thumbnailContainer.replaceChildren();
    for (let i = index; i < index + thumbnails && i < totalPhotos; i++) {
        const img = document.createElement('img');
        img.src = `public/assets/photos/${i + 1}.jpg`;
        thumbnailContainer.appendChild(img);
    }
}


const currentPhoto = document.querySelector('#currentPhoto');
document.querySelector('#nextPhoto').addEventListener('click', () => {
    if (photo < totalPhotos - 1) {
        photo++;
        currentPhoto.src = `public/assets/photos/${photo + 1}.jpg`;
    }
});
document.querySelector('#prevPhoto').addEventListener('click', () => {
    if (photo > 0) {
        photo--;
        currentPhoto.src = `public/assets/photos/${photo + 1}.jpg`;
    }
});
document.querySelector('#nextThumbnail').addEventListener('click', () => {
    if ((thumbnailPage * thumbnails) + thumbnails < totalPhotos) {
        thumbnailPage++;
        updateThumbnails();
    }
});
document.querySelector('#prevThumbnail').addEventListener('click', () => {
    if (thumbnailPage * thumbnails > 0) {
        thumbnailPage--;
        updateThumbnails();
    }
});
updateThumbnails();

