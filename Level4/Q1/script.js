var arr =[2,-3,-4,5,-6,-7,8,-9];
var Positive = [];
var Negative = [];
for(var i=0; i<arr.length; i++){
    if(arr[i]<0){
        Negative++;
    } 
    if(arr[i]>0){
        Positive++;
    }}
    document.write("Positive Number are : ",Positive);
    document.write("<br>Negative Number are : ",Negative);
