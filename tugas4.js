/*Tersedia 2 data Array. Tugas kita adalah untuk cek apakah ada nilai yang sama pada kedua Array.
Array pertama = [‘Math’, ‘English’, ‘Programming’]
Array kedua = [‘Geography’, ‘Spanish’, ‘Programming’]
Program akan mengembalikan nilai TRUE or FALSE */

let firstArr = ["Math", "English", "Programming"];
let secondArr = ["Geography", "Spanish", "Programming"];
let allArr = firstArr.concat(secondArr);
let check = allArr.includes("Programming");

console.log(check);
