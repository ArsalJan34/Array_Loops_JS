var arr = [5, 8, 12, 3, 9];
var largest = arr[0];
var smallest = arr[0];

for (var i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
    if (arr[i] < smallest) {
        smallest = arr[i];
    }
}
var difference = largest - smallest;

document.write("Difference =", difference);