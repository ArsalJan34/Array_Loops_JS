
var arr = [5, 8, 12, 3, 7,89,101,45,87,89];
var num = 99;   
var found = false;
for (var i = 0; i < arr.length ; i++)        {
if (arr[i] === num) {
        found = true;
    break;
    }
}if (found) {
    document.write(num +" exists in the array");
} else {
    document.write(num+ " does not exist in the array");
}
