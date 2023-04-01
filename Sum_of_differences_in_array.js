function sumOfDifferences(arr) {
    arr.sort((a, b) => b - a)
    let a = 0
    for (let i = 0; i < arr.length - 1; i++) {
        a += arr[i] - arr[i+1]
    }
    return a
}