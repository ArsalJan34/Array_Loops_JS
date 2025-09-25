var arr=[3,4,5,6,8,9,15];
for(var i=0; i < arr.length; i++){
    if(arr[i] % 2 === 0 ){
        document.write("First even number = "+arr[i]);
        break;
    }
}
