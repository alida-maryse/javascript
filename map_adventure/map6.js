var arr = [
    {firstName: 'Daniel', surname: 'Beckham'},
    {firstName: 'David', surname: 'Graig'},  
  ];
var arr2 = arr.map(myFunction);
function myFunction(str){
    return str.firstName+" "+str.surname ;
}
console.log(arr2)

