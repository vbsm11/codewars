function warnTheSheep(queue) {
    return  queue.indexOf('wolf') === queue.length - 1
        ? "Pls go away and stop eating my sheep"
        : `Oi! Sheep number ${queue.length - 1 - queue.indexOf('wolf')}! You are about to be eaten by a wolf!`
}