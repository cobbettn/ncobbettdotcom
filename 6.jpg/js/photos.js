const photos = {
    photo: 0,
    totalPhotos: 27, // remember to update this when adding or removing photos
    thumbnailPage: 0,
    thumbnailsDisplayed: 5,
    photosPath: 'public/assets/photos/',
    currentPhoto: document.querySelector('img#currentPhoto'),
    nextPhotoButton: document.querySelector('button#nextPhoto'),
    prevPhotoButton: document.querySelector('button#prevPhoto'),
    nextThumbnailButton: document.querySelector('button#nextThumbnail'),
    prevThumbnailButton: document.querySelector('button#prevThumbnail'),
    updatePhoto: function(i) {
        this.currentPhoto.src = `${this.photosPath}${this.photo + 1}.jpg`;
    },
    nextPhoto: function() {
        if (this.photo < this.totalPhotos - 1) {
            this.photo++;
            this.updatePhoto();
            this.prevPhotoButton.disabled = false;
        }
        else {
            this.nextPhotoButton.disabled = true;
        }
    },
    prevPhoto: function() {
        if (this.photo > 0) {
            this.photo--;
            this.updatePhoto();
            this.nextPhotoButton.disabled = false;
        }
        else {
            this.prevPhotoButton.disabled = true;
        }
    },
    updateThumbnails: function() {
        const thumbnailContainer = document.querySelector('div#thumbnails');
        thumbnailContainer.replaceChildren();
        const startingIndex = this.thumbnailPage * this.thumbnailsDisplayed;
        for (let i = startingIndex; i < startingIndex + this.thumbnailsDisplayed && i < this.totalPhotos; i++) {
            const img = document.createElement('img');
            img.src = `${this.photosPath}${i + 1}.jpg`;
            img.onclick = () => {
                this.photo = i;
                this.updatePhoto();
            };
            thumbnailContainer.appendChild(img);
        }
    },
    nextThumbnailPage: function() {
        if (this.thumbnailPage <= this.totalPhotos / this.thumbnailsDisplayed - 1) {
            this.thumbnailPage++;
            this.updateThumbnails();
            this.prevThumbnailButton.disabled = false;
        }
        else {
            this.nextThumbnailButton.disabled = true;
        }
    },
    prevThumbnailPage: function() {
        if (this.thumbnailPage * this.thumbnailsDisplayed > 0) {
            this.thumbnailPage--;
            this.updateThumbnails();
            this.nextThumbnailButton.disabled = false;
        }
        else {
            this.prevThumbnailButton.disabled = true;
        }
    },
    setup: function() {
        this.nextPhotoButton.addEventListener('click', () => this.nextPhoto());
        this.prevPhotoButton.addEventListener('click', () => this.prevPhoto());
        this.nextThumbnailButton.addEventListener('click', () => this.nextThumbnailPage());
        this.prevThumbnailButton.addEventListener('click', () => this.prevThumbnailPage());
        this.updateThumbnails(); // set initial thumbnail state
        console.log(photos)
    }
}

photos.setup();
