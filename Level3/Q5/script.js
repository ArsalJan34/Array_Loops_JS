var arr = [10,20,30,40,50];
var reversed = [];
var arrReverse = 0;

for (var i = arr.length - 1; i >= 0; i--) {
    reversed[arrReverse] = arr[i];
    arrReverse++;
}
document.write("Array reversed: ", reversed);