 var  arr = [2,4,6,9,3,15,21,25];
 var count = 0;
for(var i=0; i<arr.length; i++){
    if(arr[i] % 3 === 0){
        count++;
   
    }
}
document.write("Devisible by three = ",  count);