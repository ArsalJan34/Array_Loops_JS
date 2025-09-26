var arr1 = [10,20,30,40,50];
var arr2= [60,70,80,90,100];
var ArrayCombined= [];
for(var i=0; i<arr1.length; i++ )
    {
    ArrayCombined[i]= arr1[ i] ;
}
for (var j= 0 ; j<arr2.length; j++)
    {
    ArrayCombined[arr1.length+j] = arr2[j];}
document.write("Combined Array : ", ArrayCombined);