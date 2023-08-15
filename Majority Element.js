/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let len = nums.length;
  let times = Math.floor(len / 2);
  let countMap = new Map();

  for (let i = 0; i < len; i++) {
    if (countMap.has(nums[i])) {
      countMap.set(nums[i], countMap.get(nums[i]) + 1);
    } else {
      countMap.set(nums[i], 1);
    }
  }

  for (let [key, value] of countMap.entries()) {
    // console.log(count)
    if (value > times) {
      return key;
    }
  }
};
