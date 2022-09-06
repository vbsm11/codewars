function findMultiples(integer, limit) {
    return Array.from(Array(limit+1).keys()).filter(e => e > 0 && e % integer === 0);
}