function abbrevName(name) {
    let arr = name.split('');
    console.log(arr);
    let out = '';
    out += arr[0] + '.';
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === ' ') out += arr[i + 1];
    }
    return out.toUpperCase();
}