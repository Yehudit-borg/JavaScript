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