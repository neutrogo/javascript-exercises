const reverseString = function(str) {
    let reversed = ''
    for(let i = str.length; i >= 0; i--) {
        let tmp = str.charAt(i);
        reversed = reversed + tmp;
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
