function twoSort(s) {
    s.sort();
    let arr = s[0].split('');
    for (let i=0; i < arr.length-1; i++) {
        arr[i] += '***';
    }
    return arr.join('')
}