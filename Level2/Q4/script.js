var arr = [1, 2, 3, 4, 5, 6, 7];
var evenCount = 0;
var oddCount = 0;

for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}
document.write("Even numbers = ", evenCount);
document.write(" Odd numbers =", oddCount);
