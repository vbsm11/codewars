const flip = (d, a) => {
    if (d === 'R') return a.sort(function (c, b) {
        return c - b;
    });
    if (d === 'L') return a.sort(function (c, b) {
        return b - c;
    });
}