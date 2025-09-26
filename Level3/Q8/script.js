var arr = [2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var sum = 0;
for(var i=0; i<arr.length; i++){
    if(arr[i] % 2 === 0){
    sum = sum + arr[i];
}}
document.write("Sum of all even numbers : ",sum);