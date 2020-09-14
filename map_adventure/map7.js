var arr = [
    {firstName: 'Daniel', surname: 'Beckham'},
    {firstName: 'David', surname: 'Graig'},  
  ];
  var arr2 = arr.map(function(elem){

      return elem = {'fullName': elem.firstName+" "+elem.surname} ; //on crée un nouveau tableau avec pour clé fullName tjs ds un string : en dehors

  });


console.log(arr2)


//on récupere le firstName et le surnam de elem 