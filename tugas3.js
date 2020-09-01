/*Diberikan 1 data array [3, 5, 7, 9, 11]
Buat sebuah program untuk membuat Array baru dari hasil perkalian array sebelumnya dengan perkalian 5.
Tampilkan pada console.log
*/

function myFunction3() {
  let arr = [3, 5, 7, 9, 11];
  newArr = arr.map((number) => {
    console.log(number * 5);
  });
}
