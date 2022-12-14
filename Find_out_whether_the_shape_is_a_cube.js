var cubeChecker = function(volume, side){
    return (volume / (side * side) === side) && (side > 0);
}