var arr = [55, 34, 77, 99, 90, 40,9];
var largest =0;
for (var i=0; i < arr.length; i++){
    if(largest < arr[i]){
        largest = arr[i];
    }
}
    document.write(largest);
