function find_average(array) {
    if (array.length) {
        let sum = array.reduce((acc, el) => acc + el, 0);
        return sum/array.length;
    }
    return 0;
}