var arr = [55,14,9,66,77,99,12,34];
var largest = 0;
for (var i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i]; 
    }
}
document.write(largest);
