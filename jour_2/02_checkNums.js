function checkNums(num1, num2) {

    if (num1== num2) {

        return 'num1 is greater than num2';
    } else if (num1 < num2) {
        return 'num1 is lower than num2';
    } else {
        return 'equal';
    }
}
var num1 = 3;
var num2 = 122;
console.log(checkNums(num1, num2));
