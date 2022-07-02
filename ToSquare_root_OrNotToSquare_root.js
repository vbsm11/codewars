function squareOrSquareRoot(array) {
    let array1 = [];
    for (let i = 0; i < array.length; i++) {
        if (Math.sqrt(array[i]) % 1 === 0) {
            array1.push(Math.sqrt(array[i]));
        }
        else {
            array1.push(array[i]*array[i]);
        }
    }
    return array1;
}