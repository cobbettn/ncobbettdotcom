const photosPage = {
    photo: 0,
    totalPhotos: 27, // remember to update this when adding or removing photos
    thumbnailsDisplayed: 5,
    thumbnailPage: 0,
    currentPhoto: document.querySelector('img#currentPhoto'),
    nextPhotoButton: document.querySelector('button#nextPhoto'),
    prevPhotoButton: document.querySelector('button#prevPhoto'),
    nextThumbnailButton: document.querySelector('button#nextThumbnail'),
    prevThumbnailButton: document.querySelector('button#prevThumbnail'),
    viewPhoto: function(i) {
        this.currentPhoto.src = `public/assets/photos/${i + 1}.jpg`;
    },
    updateThumbnails: function() {
        const thumbnailContainer = document.querySelector('#thumbnails');
        thumbnailContainer.replaceChildren();
        const startingIndex = this.thumbnailPage * this.thumbnailsDisplayed;
        for (let i = startingIndex; i < startingIndex + this.thumbnailsDisplayed && i < this.totalPhotos; i++) {
            const img = document.createElement('img');
            img.src = `public/assets/photos/${i + 1}.jpg`;
            img.onclick = () => this.viewPhoto(i);
            thumbnailContainer.appendChild(img);
        }
    },
    nextPhoto: function() {
        if (this.photo < this.totalPhotos - 1) {
            this.viewPhoto(++this.photo);
            this.prevPhotoButton.disabled = false;
        }
        else {
            this.nextPhotoButton.disabled = true;
        }
    },
    prevPhoto: function() {
        if (this.photo > 0) {
            this.viewPhoto(--this.photo);
            this.nextPhotoButton.disabled = false;
        }
        else {
            this.prevPhotoButton.disabled = true;
        }
    },
    nextThumbnailPage: function() {
        if ((this.thumbnailPage * this.thumbnailsDisplayed) + this.thumbnailsDisplayed < this.totalPhotos) {
            this.thumbnailPage++;
            this.updateThumbnails();
            this.prevThumbnailButton.disabled = false;
        }
        else {
            console.log('foo');
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
        this.updateThumbnails();

    }
}

photosPage.setup();
