var arr = ['m','n','o','p']
var arr2 = arr.map(myFunction);
function myFunction(letter){
    return letter.toUpperCase();
}
console.log(arr2);
