var arr = [1, 2, 3, 4];
var last = arr[arr.length - 1];

for (var i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
}
arr[0] = last;

document.write("Array after right rotation: ", arr);