var arr = [1, 2, 3, 4];

var    first = arr[0 ];

for  (var i = 0; i < arr.length - 1; i++)
     {

    arr[i] = arr[i + 1];
}
arr[arr.length - 1] = first;

document.write("Array after left rotation: ", arr);
