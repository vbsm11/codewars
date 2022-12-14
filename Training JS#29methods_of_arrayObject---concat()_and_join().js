function bigToSmall(arr){
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res = res.concat(arr[i])
    }
    return res.sort((a,b) => b - a).join(">")
}