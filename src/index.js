import './styles.css';
import './css/loader.css';
import './css/image_finder.css'

// Templates
import galleryListItemTpl from './templates/gallery-list-item.hbs';

// API
import apiService from './js/services/apiService.js';

// Plugins
import loader from './js/plugins/loader.js';

const refs = {
    searchForm: document.querySelector('#search-form'),
    imagesList: document.querySelector('#gallery'),
    loadMoreBtn: document.querySelector('button[data-action="load-more"]'),
}
// Event Listeners
refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
refs.loadMoreBtn.addEventListener('click', loadMoreBtnClickHandler);

// Handlers
function searchFormSubmitHandler(e) {
    e.preventDefault();

    clearImagesList();

    const searchForm = e.currentTarget;

    const query = searchForm.elements.query.value;

    if (query.trim().length === 0) {
        // TODO: show notification, input shouldnt be empty
        return;
    }

    apiService.query = encodeURIComponent(query);
    
    fetchImages();
};

function loadMoreBtnClickHandler() {
    fetchImages();
};

function fetchImages() {
    loader.showLoader();
    apiService.fetchImages().then(images => {
        const imagesWithTags = generateImageTags(images);
        
        renderImagesList(imagesWithTags);

        refs.loadMoreBtn.classList.remove('js-hide');

        loader.hideLoader();
    }).catch(error => console.warn(error.message));
};

function renderImagesList(images) {
    const markup = images.map( image => galleryListItemTpl(image));
    refs.imagesList.insertAdjacentHTML('beforeend', markup);
};

function clearImagesList() {
    refs.imagesList.innerHTML = '';
    refs.loadMoreBtn.classList.add('js-hide');
    apiService.resetPage();
};

function generateImageTags(images) {
    return images.reduce( (images, image) => {
        image.tags = image.tags.split(',');
        images.push(image);
        return images;
    }, []);
}