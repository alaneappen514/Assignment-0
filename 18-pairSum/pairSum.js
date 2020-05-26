function pairSum(nums, target) {
  var add;
  if( nums.length <= 1)
  {
    throw new Error("Not supported!");
  }
  else{
  for(i=0; i<nums.length; i++)
   {
     for(k= i+1; k<nums.length; k++)
     {
           if(target - nums[i] === nums[k])
           {
            return true;
           }
     }
   }
   return false;
  }
}

// Do not edit this line;
module.exports = pairSum;