// function usingSort(arr, n, k)
// {
//   // Sort the given array
//   arr.sort((a,b) => a-b);
//
//   // Return k'th element in the sorted array
//   return arr[k - 1];
// }



let swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let partition = (arr, l, r) => {
  let parititonIndex = Math.floor((Math.random() * (r - l) + l));
  let pivot = arr[parititonIndex];
  let indexStore = l;
  swap(arr, parititonIndex, r);
  for(let i = l; i < r; i++) {
    if(arr[i] < pivot) swap(arr, indexStore++, i);
  }
  swap(arr, indexStore, r);

  return indexStore;
}

let quickSelect = (arr, k, l, r) => {
  if (l == r) return arr[l];
  let pos = partition(arr, l, r);
  if(pos == k) return arr[k];
  else if (pos < k) return quickSelect(arr, k, pos + 1, r);
  else return quickSelect(arr, k, l, pos - 1);

}

var findKthLargest = function(nums, k) {
  let target = nums.length - k; //we are looking for kth smallest index (kth from the end)
  return quickSelect(nums, target, 0, nums.length - 1);
};
