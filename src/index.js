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
    const searchForm = e.currentTarget;
    console.log('searchFormSubmitHandler');
    fetchImages();
};

function loadMoreBtnClickHandler() {
    console.log('loadMoreBtnClickHandler');
    // fetchImages();
};

function fetchImages() {
    apiService.fetchImages().then(images => {
        console.log(images);
        renderImagesList(images);
        // console.log(images);
    }).catch(error => console.warn(error));
};

function renderImagesList(images) {
    // webformatURL, largeImageURL, likes, views, comments, downloads
    const markup = images.map( image => galleryListItemTpl(image));
    refs.imagesList.insertAdjacentHTML('beforeend', markup);
    // generateListItemsMarkup
    // insert into list

};

function clearImagesList() {
    // clear list
};