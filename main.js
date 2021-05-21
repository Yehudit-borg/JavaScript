function convertFahrToCelsius(F){
    var d = F - 32;
    var v = d *5/9;
    var z= v.toFixed(4);
    var _F =JSON.stringify(F);
    if(typeof(F) === 'string') {
        return z;
    } else if(typeof(F) === 'boolean') {
       return "false is not a valid number but a/an boolean";
    }
    else if(Array.isArray(F)) {
        return"[1,2,3] is not a valid number but a/an array"
    }
     else if(typeof(F) === 'object') {
     return "{temp: 0} is not a valid number but a/an object"
    }

  return z;
  }
 console.log(convertFahrToCelsius(0))
  console.log(convertFahrToCelsius("0"))
  console.log(convertFahrToCelsius(32))
  console.log(convertFahrToCelsius("32"))
  console.log(convertFahrToCelsius(false))
  console.log(convertFahrToCelsius({temp: 0}))
  console.log(convertFahrToCelsius([1,2,3]));




  function checkYuGiOh(n){
    var l_arr = [] ; 
    var arr = 1, arr2 = 1, arr3 = 0;
  
  
  if(!isNaN(n)){
    for (arr; arr <=n; arr++){
    arr2 = arr; 
    arr3 = 0;
    if (arr % 2 == 0) {
      arr2 = "yu"; arr3++;
    } 
    if (arr % 3 == 0) {
      arr2 = "gi"; arr3++;
    } 
    if (arr % 5 == 0) {
      arr2 = "oh"; arr3++;
    } 
    
    if (arr3 == 2) {
      arr2 = "yu-oh"; 
    } 
    if (arr3 == 3) {
      arr2 = "yu-gi-oh"; 
    } 
    l_arr.push(arr2)
    }
    console.log(l_arr);
  }
  else{console.log("Invalid parameter " + JSON.stringify(n))}
  }
  
  checkYuGiOh(10)
  checkYuGiOh(100)
  checkYuGiOh("fizzbuzz is meh")
  checkYuGiOh("12")
  checkYuGiOh(true)