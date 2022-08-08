function correctTail(body, tail) {
    sub = body.substr(body.length - tail.length)
    return sub === tail;
}