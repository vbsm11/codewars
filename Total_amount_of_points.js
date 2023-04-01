function points(games) {
    let a = 0;
    for (let i = 0; i < games.length; i++) {
        if (games[i].split(':')[0] > games[i].split(':')[1]) {
            a = a + 3
        }
        if (games[i].split(':')[0] === games[i].split(':')[1]) {
            a++
        }
    }
    return a
}