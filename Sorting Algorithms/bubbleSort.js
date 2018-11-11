function bubbleSort(arr) {
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        // swap them
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr; 
}

console.log(bubbleSort([5, 4, 1, 2]))