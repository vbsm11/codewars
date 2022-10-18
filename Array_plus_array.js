function arrayPlusArray(arr1, arr2) {
    let arr = arr1.concat(arr2);
    return arr.reduce((sum, el) => sum + el, 0)
}