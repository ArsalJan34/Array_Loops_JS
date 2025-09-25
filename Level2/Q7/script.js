var arr=[3,4,5,6,8,9,15,12,17,80,84];
for(var i = arr.length - 1; i >= 0; i--){
    if(arr[i] % 2 !== 0 ){
        document.write("Last odd number = ", arr[i]);
        break;
    }
}

