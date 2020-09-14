var arr = ['pan', 'top', 'pal', 'tool']
var arr2 = arr.map(myFunction);
function myFunction(str){
    return str.split('').reverse().join('')
}
console.log(arr2)
