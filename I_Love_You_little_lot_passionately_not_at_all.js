function howMuchILoveYou(nbPetals) {
    const ph = ['I love you','a little', 'a lot', 'passionately', 'madly', 'not at all'];
    return ph[ (nbPetals-1) % ph.length]
}