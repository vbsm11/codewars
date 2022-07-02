function betterThanAverage(classPoints, yourPoints) {
    classPoints.push(yourPoints);
    let num = 0;
    for (let i = 0; i < classPoints.length; i++) {
        num += classPoints[i];
    }
    num = num / classPoints.length;
    if (yourPoints > num) return true;
    else return false;
}