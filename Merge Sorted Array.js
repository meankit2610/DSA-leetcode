/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  for (var i = 0; i < n; i++) {
    nums1[m + i] = nums2[i];
  }

  for (var i = 0; i < nums1.length - 1; i++) {
    for (var j = 0; j < nums1.length - i - 1; j++) {
      if (nums1[j] > nums1[j + 1]) {
        swap(nums1, j);
        // bag=bag+arr[]
      }
    }
  }
  console.log(nums1.join(" "));
  function swap(nums1, j) {
    var temp = nums1[j];
    nums1[j] = nums1[j + 1];
    nums1[j + 1] = temp;
  }

  return nums1;
};
