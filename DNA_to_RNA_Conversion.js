function DNAtoRNA(dna) {
    const arr = dna.split('');
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === 'T') arr[i] = 'U'
    }
    return arr.join('')
}