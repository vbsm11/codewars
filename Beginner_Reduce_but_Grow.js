function grow(x){
    return x.reduce((a,e) => {
        return a*e
    }, 1)
}