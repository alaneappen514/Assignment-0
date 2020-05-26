function countOfAllIndexMatchingNumbers(nums) {
  var count = 0;
  for(i=0; i<nums.length; i++)//Index
  {
       if(i === nums[i])
       {
         count++
       }

  }
  return count;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;