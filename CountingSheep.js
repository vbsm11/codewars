function countSheeps(arrayOfSheep) {
    let c = 0;
    for (let i = 0; i<arrayOfSheep.length; i++) {
        if (arrayOfSheep[i]===true) c++;
    }
    return c;
}