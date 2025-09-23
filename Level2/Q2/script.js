var arr =[44, 66, 77, 3, 22, 55];
var smallest = arr[0];
for (var i =0; i < arr.length; i++){
    if ( arr[i] < smallest){
        smallest = arr[i];
    }
} document.write(smallest);

