var arr = ['apple', 'croissant', 'pear']

var arr2 = arr.map(function(elem){
    return elem = elem.replace('apple','<li>apple</li>').replace('croissant','<li>croissant</li>').replace('pear','<li>pear</li>')
});
console.log(arr2)

