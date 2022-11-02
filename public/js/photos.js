window.onload = () => {
    const totalPhotos = 27; // update this count when photos are added/removed
    let currentPhotoIndex = 1;
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
