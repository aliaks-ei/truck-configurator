import debounce from 'lodash.debounce';

function debouncedMethod(...rest) {
    return debounce(...rest);
}

export default { debouncedMethod };
