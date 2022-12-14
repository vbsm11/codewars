function nextId(ids){
    let m = 0;
    ids.sort((a,b) => a - b)
    for (let i = 0; i < ids.length; i++) {
        if (m === ids[i]) m = ids[i] + 1
    }
    return m;
}