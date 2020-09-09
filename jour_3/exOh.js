function WordCount(str) {


    var ex = str.split("x").join("");
  
    var o = str.split("o").join("");
  
    return ex.length === o.length;
  
  }
  
  console.log(WordCount("xooox"));                                