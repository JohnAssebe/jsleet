/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    lstDigit=digits[digits.length-1]
    if(lstDigit==9 && digits.length==1){
        return [1,0]
    }
    else if(lstDigit!=9){
        return digits.slice(0,-1).concat([lstDigit+1]);
    }
    else{
        return plusOne(digits.slice(0,-1)).concat([0])
    }
    
};

console.log(plusOne([9,9,9,9,9,9,9,9,9]))