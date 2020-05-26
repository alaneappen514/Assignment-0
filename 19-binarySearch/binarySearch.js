class MySolution {
  constructor() {
    this.flag = false;
  }

  binarySearch(nums, target) {
  var mid;
  var left;
  var right;

  if(nums.length === 1 && nums[0]!==target)
  {
    return false;
  }
  mid = parseInt(nums.length/2);
  left = nums.slice(0,mid);
  right = nums.slice(mid, nums.length);

  if(target === nums[mid])
  {
    return true;
  }
  else if( target > nums[mid] && right.length>0)
  {
    return this.binarySearch(right, target);
  }
  else if(target <= nums[mid] && left.length>0)
  {
    return this.binarySearch(left, target);
  }
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;