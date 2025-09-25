var arr = [5, 8, 12, 3, 7,89,101,45,87,89];
var num = 101;  
var position; 
for (var i = 0; i < arr.length ; i++)  {
if (num === arr[i]) {
    position = i;
    break;
}
}
document.write("Position of "+num+" is "+position);