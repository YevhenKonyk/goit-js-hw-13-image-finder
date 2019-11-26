const baseUrl = 'https://pixabay.com/api/';
const API_KEY = '14348648-b031b318d2a0c2c3bc8ffa9be';

// Модель
export default {
    page: 1,
    query: '',
    pageSize: 3,
    fetchImages() {
        const requestParams = `?q=${this.query}&page=${this.page}&pageSize=${this.pageSize}?key="${API_KEY}"`;
        
        // Возвращаем промис содержащий response.json()
        return fetch(baseUrl + requestParams, options)
            .then(response => response.json())
            .then(parsedResponse => {
                this.incrementPage();
                console.log(parsedResponse);
                // return parsedResponse.articles;
            });
    },
    
    get searchQuery() {
        return this.query;
    },

    set searchQuery(value) {
        this.query = value;
    },

    incrementPage() {
        this.page += 1;
    },

    resetPage() {
        this.page = 1;
    },

    get pageSize() {
        return this.pageSize;
    },

    set pageSize(value) {
        this.pageSize = value;
    },
};