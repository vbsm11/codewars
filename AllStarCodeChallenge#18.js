function strCount(str, letter){
    let a = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) a++
    }
    return a
}