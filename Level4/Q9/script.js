var arr = [1, 2, 3, 4, 5 ];
var sorted =  true;

for (var i = 0; i < arr.length - 1; i++ ) {
    if (arr[i] > arr[i + 1] )    {
        sorted = false;
        break;
                    }
}
if (sorted)    {
    document.write("Array is sorted");
}
 else 
    {
    document.write("Array is not sorted");
}
