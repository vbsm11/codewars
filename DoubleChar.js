function doubleChar(str) {
    let arr = str.split('');
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        arr1.push(arr[i] + arr[i]);
    }
    return arr1.join('');
}