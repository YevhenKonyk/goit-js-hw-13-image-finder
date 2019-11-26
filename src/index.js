import './styles.css';
import './css/image_finder.css'

import galleryListItemTpl from './templates/gallery-list-item.hbs';

import apiService from './js/services/apiService.js';

const refs = {
    searchForm: document.querySelector('#search-form'),
    imagesList: document.querySelector('#gallery'),
    loadMoreBtn: document.querySelector('button[data-action="load-more"]'),
}

refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
refs.loadMoreBtn.addEventListener('click', loadMoreBtnClickHandler);


function searchFormSubmitHandler(e) {
    e.preventDefault();

    clearImagesList();

    const searchForm = e.currentTarget;

    const query = searchForm.elements.query.value;
    console.log(query.length);
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
    apiService.fetchImages().then(images => {
        console.log(images);
        renderImagesList(images);

        refs.loadMoreBtn.classList.remove('js-hide');
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