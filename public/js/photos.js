const totalPhotos = 27; // change this when photos are added
let currentPhotoIndex = 1;
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

export default addPhotoListeners;