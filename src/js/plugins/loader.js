const loader = {
    element: document.querySelector('.loader-overlay'),
    showLoader() {
        this.element.classList.remove('js-hide');
    },
    hideLoader() {
        this.element.classList.add('js-hide');
    }
}

export default loader;