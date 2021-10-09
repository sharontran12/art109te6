for (let n = 1; n <=100; n++) {
  
  let output = "";
  
//let output = "n"; is 3Fizz
//let output = "" is Fizz
  if (n % 3 ===0) output += "Fizz";
  
  
// output += "Fizz" is output = output + "Fizz"
  if (n % 5 ===0) output += "Buzz";
  
// similar to above
  
  console.log(output || n);
}

//|| means or
