const photosPage = {
    totalPhotos: 21, // reminder to update this when adding or removing photos
    thumbnailsPerPage: 5,
    photo: 0,
    thumbnailPage: 0,
    currentPhoto: document.querySelector('img#currentPhoto'),
    nextPhotoButton: document.querySelector('button#nextPhoto'),
    prevPhotoButton: document.querySelector('button#prevPhoto'),
    nextThumbnailButton: document.querySelector('button#nextThumbnail'),
    prevThumbnailButton: document.querySelector('button#prevThumbnail'),
    viewPhoto: function(i) {
        this.photo = i;
        if (this.photo  === 0) {
            this.prevPhotoButton.disabled = true;
        }
        else if (this.photo + 1 === this.totalPhotos) {
            this.nextPhotoButton.disabled = true;
        }
        else {
            this.prevPhotoButton.disabled = false;
            this.nextPhotoButton.disabled = false;
        }
        this.currentPhoto.src = `public/assets/photos/${this.photo + 1}.jpg`;
    },
    nextPhoto: function() {
        if (this.photo < this.totalPhotos - 1) {
            this.viewPhoto(++this.photo);
        }
    },
    prevPhoto: function() {
        if (this.photo > 0) {
            this.viewPhoto(--this.photo);
        }
    },
    updateThumbnails: function() {
        const thumbnailContainer = document.querySelector('#thumbnails');
        thumbnailContainer.replaceChildren();
        const startingIndex = this.thumbnailPage * this.thumbnailsPerPage;
        for (let i = startingIndex; i < startingIndex + this.thumbnailsPerPage && i < this.totalPhotos; i++) {
            const img = document.createElement('img');
            img.src = `public/assets/photos/${i + 1}.jpg`;
            img.onclick = () => this.viewPhoto(i);
            thumbnailContainer.appendChild(img);
        }
        if (this.thumbnailPage === 0) {
            this.prevThumbnailButton.disabled = true;
        }
        else if (this.thumbnailPage + 1 === this.totalThumbnailPages) {
            this.nextThumbnailButton.disabled = true;
        }
        else {
            this.nextThumbnailButton.disabled = false;
            this.prevThumbnailButton.disabled = false;
        }
    },
    nextThumbnailPage: function() {
        if (this.thumbnailPage < this.totalThumbnailPages - 1) {
            this.thumbnailPage++;
            this.updateThumbnails();
        }
    },
    prevThumbnailPage: function() {
        if (this.thumbnailPage * this.thumbnailsPerPage > 0) {
            this.thumbnailPage--;
            this.updateThumbnails();
        }
    },
    setup: function() {
        this.nextPhotoButton.addEventListener('click', () => this.nextPhoto());
        this.prevPhotoButton.addEventListener('click', () => this.prevPhoto());
        this.nextThumbnailButton.addEventListener('click', () => this.nextThumbnailPage());
        this.prevThumbnailButton.addEventListener('click', () => this.prevThumbnailPage());
        this.totalThumbnailPages = Math.ceil(this.totalPhotos / this.thumbnailsPerPage);
        this.updateThumbnails();
    }
}

photosPage.setup();
