// import { request } from "http";

const baseUrl = 'https://pixabay.com/api/';
const API_KEY = '14348648-b031b318d2a0c2c3bc8ffa9be';

// Модель
export default {
    page: 1,
    query: '',
    per_page: 3,

    fetchImages() {
        const requestParams = `?q=${this.query}&page=${this.page}&per_page=${this.per_page}&key=${API_KEY}`;
       
        // Возвращаем промис содержащий parsedResponse.hits
        return fetch(baseUrl + requestParams)
            .then(response => response.json())
            .then(parsedResponse => {
                this.incrementPage();
                
                return parsedResponse.hits;
            });
    },
    
    get searchQuery() {
        return this.query;
    },

    set searchQuery(value) {
        this.query = encodeURIComponent(value);
    },

    incrementPage() {
        this.page += 1;
    },

    resetPage() {
        this.page = 1;
    },

    get pageSize() {
        return this.per_page;
    },

    set pageSize(value) {
        this.per_page = value;
    },
};