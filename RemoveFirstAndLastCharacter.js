function removeChar(str){
    let str1 = str.split('');
    str1.pop();
    str1.shift();
    str = str1.join('');
    return str;
};