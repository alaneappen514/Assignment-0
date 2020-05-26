function frequencyCounter(word) {
   let array = {};

   for(i=0;i<word.length;i++)
   {
     var char = word[i];
     if(array[char])
     {
       array[char]++
     }
     else{
       array[char] = 1;
     }
   }
   return array;
}

// Do not edit this line;
module.exports = frequencyCounter;