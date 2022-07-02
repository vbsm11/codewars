function fakeBin(x){
    let arr = x.split('');
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 5) arr1.push('0');
        else arr1.push('1');
    }
    return arr1.join('');
}