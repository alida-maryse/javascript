var arr = [
    {firstName: 'Daniel', surname: 'Beckham'},
    {firstName: 'David', surname: 'Graig'},  
  ];
  var arr2 = arr.map(function(elem){

      return elem = {firstName: elem.firstName,surname: elem.surname, fullName: elem.firstName+' ' +elem.surname} 

  });


console.log(arr2)
