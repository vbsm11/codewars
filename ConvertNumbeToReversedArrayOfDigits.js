function digitize(n) {
    let n1 = String(n);
    let arr1 = Array.from(n1);
    let arr = [];
    for (let i = arr1.length - 1; i >= 0; i--) {
        arr.push(+arr1[i]);
    }
    return arr;
}