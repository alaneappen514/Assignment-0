function sumOfMinimumAndMaximum(nums) {
var answer = Math.min(...nums) + Math.max(...nums);
return answer;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;