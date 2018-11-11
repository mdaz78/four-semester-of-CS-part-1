function bubbleSortExercise (nums) {
  var swapped = false;
  var counter = 0;
  do {
    swapped = false;
    counter = 0;
    while(counter < nums.length) {
      if(nums[counter] > nums[counter + 1]) {
        swapped = true;
        const temp = nums[counter];
        nums[counter] = nums[counter + 1];
        nums[counter + 1] = temp;
      }
      counter++;
    }
  } while(swapped)
  return nums;
}

console.log(bubbleSortExercise([5, 4, 3, 2, 1]));

