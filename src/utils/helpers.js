import debounce from 'lodash.debounce';

function debouncedMethod(...rest) {
    return debounce(...rest);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export default { capitalizeFirstLetter, debouncedMethod };
