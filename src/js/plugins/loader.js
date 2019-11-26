const loader = {
    element: document.querySelector('.loader-overlay'),
    showLoader() {
        console.log(this.element);
        this.element.classList.remove('js-hide');
    },
    hideLoader() {
        console.log(this.element);
        this.element.classList.add('js-hide');
    }
}

export default loader;