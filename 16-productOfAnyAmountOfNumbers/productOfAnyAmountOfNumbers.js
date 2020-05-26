function productOfAnyAmountOfNumbers(...args) {
  var product = args[0];
  for(i=1; i< args.length; i++)
  {
     product = product * args[i];
  }
 return product;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;