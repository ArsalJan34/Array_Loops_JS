var array = [2,3,5,6,7,8,9,10,11,13,14,16];
var OddArray = [];
var Odd = 0;
for(var i = 0; i < array.length; i++){
    if(array[i] % 2 !== 0){
        OddArray[Odd] = array[i];
        Odd++
    }
}
document.write("Odd Numbers from first array :", OddArray);