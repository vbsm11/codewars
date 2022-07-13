function twiceAsOld(dadYearsOld, sonYearsOld) {
    let sonYears = 0;
    let dadYears = sonYears + (dadYearsOld - sonYearsOld);
    for (let i = 0; i >= 0; i++) {
        if (dadYears/sonYears == 2) return Math.abs(dadYears-dadYearsOld)
        else {
            sonYears++
            dadYears++
        }
    }
}