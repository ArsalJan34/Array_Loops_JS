var array = [2,3,5,6,7,8,9,10,11,13,14,16];
var EvenArray = [];
var even = 0;
for(var i = 0; i < array.length; i++){
    if(array[i] % 2 === 0){
        EvenArray[even] = array[i];
        even++
    }
}
document.write("Even Numbers from first array :", EvenArray);