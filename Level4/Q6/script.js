var arr = [1, 2, 3, 4, 5];
var temp = arr[0];
arr[0] = arr[arr.length - 1];
arr[arr.length - 1] = temp;

document.write("Array after swapping first and last elements: ", arr);