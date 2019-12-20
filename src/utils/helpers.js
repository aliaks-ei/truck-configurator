import debounce from 'lodash.debounce';

function debouncedMethod(...rest) {
    return debounce(...rest);
}

function capitalizeFirstLetter(string = '') {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function showErrorToast() {
    const content = 'Internal server error';
    const params  = {
        title         : 'Error',
        variant       : 'danger',
        autoHideDelay : 5000
    };

    this.$bvToast.toast(content, params);
}

export default { capitalizeFirstLetter, debouncedMethod, showErrorToast };
