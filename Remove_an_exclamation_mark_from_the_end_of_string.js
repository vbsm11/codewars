function remove(string) {
    if (string[string.length - 1] === '!') return string.slice(0, -1);
    else return string;
}