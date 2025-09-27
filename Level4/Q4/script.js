var arr = [5, 8, 12, 3, 9];
var smallest = arr[0];
var secondSmallest = arr[0];

for (var i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
        secondSmallest = smallest;
        smallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
        secondSmallest = arr[i];
    }
}
document.write("Second Smallest =", secondSmallest);
