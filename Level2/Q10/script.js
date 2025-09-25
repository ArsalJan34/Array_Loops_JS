var arr = [5,6,8,10,15,16,18,19,9,50,60];
var num = 10;   
var count = 0;

for (var i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
        count++;
    }
}
document.write( count, " Number are greater than : ", num );
