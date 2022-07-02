function countPositivesSumNegatives(input) {
    if (input == null || input.length < 1) {
        return [];
    }

    let arr = [0,0];

    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            arr[0] = arr[0] + 1;
        }
        if (input[i] < 0) {
            arr[1] = arr[1] + input[i];
        }
    }
    return arr;
}