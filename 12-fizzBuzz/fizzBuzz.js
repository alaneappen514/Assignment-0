function fizzBuzz(start, end) {
  var array = [];
  for (i = start; i <= end; i++) 
  {
    
    if (i % 5 === 0 && i % 3 === 0) 
    {
      array.push("FizzBuzz");
    } 
    else if (i % 5 === 0) 
    {
      array.push("Buzz");
    } 
    else if (i % 3 === 0)
    {
      array.push("Fizz");
    }
    else
    {
      array.push(i);
    } 
  }
  return array;
}

// Do not edit this line;
module.exports = fizzBuzz;