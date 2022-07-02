function squareSum(numbers){
    let sq = 0;
    for (let i = 0; i < numbers.length; i++) {
        sq += numbers[i] * numbers[i];
    }
    return sq;
}