function setUnionOfAnyAmountOfSets(...args) {

    
   var union = new Set()

   for( let set of args)
   {
    for (let elem of set)
     {
        union.add(elem)
     }
    }

    return union;
    }
    

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;