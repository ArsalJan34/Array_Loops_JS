var arr = [5, 8, 12, 3, 9];
var largest = arr[0];
var secondLargest = arr[0];

for (var i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
        secondLargest = arr[i];
    }
}
document.write("Second Largest = ", secondLargest);
