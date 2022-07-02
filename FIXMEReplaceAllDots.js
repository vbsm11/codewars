var replaceDots = function(str) {
    let arr = str.split('');
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '.') arr1.push('-');
        else arr1.push(arr[i]);
    }
    return arr1.join('');
}