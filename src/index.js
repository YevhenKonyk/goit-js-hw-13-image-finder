import './styles.css';
import './css/image_finder.css'

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
};

function loadMoreBtnClickHandler() {
    console.log('loadMoreBtnClickHandler');
    // fetchImages();
};

function fetchImages() {
    apiService.fetchImages().then(images => {
        renderImagesList(images);
        // console.log(images);
    }).catch(error => console.warn(error));
};

function renderImagesList(images) {
    // generateListItemsMarkup
    // insert into list

};

function clearImagesList() {
    // clear list
};