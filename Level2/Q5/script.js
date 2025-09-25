var arr = [2, 4, 2, 5, 2, 7, 4];
var num = 2;   
var count = 0;

for (var i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
        count++;
    }
}
document.write(num + " appears " + count + " times");
