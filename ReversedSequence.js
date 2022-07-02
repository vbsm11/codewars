const reverseSeq = n => {
    let res = [];
    let eq = n;
    for (let i = 0; i < n; i++) {
        res.push(eq);
        eq--
    }
    return res;
};