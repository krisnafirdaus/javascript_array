/*Buatlah data array yang berisi minimal 5 pekerjaan dibidang IT (Ex. Front end developer). 
Tampilkan panjang data Array
Tampilkan seluruh item pada array
Gunakan Console.log
Tampilkan data tersebut pada Halaman HTML menggunakan list tag
*/

let arr = [
  "frontend developer",
  "backend developer",
  "fullstack",
  "devops",
  "mobile developer",
];

document.getElementById("demo").innerHTML = arr[0];
document.getElementById("demo2").innerHTML = arr[1];
document.getElementById("demo3").innerHTML = arr[2];
document.getElementById("demo4").innerHTML = arr[3];
document.getElementById("demo5").innerHTML = arr[4];

console.log(arr.length);
console.log(arr);
