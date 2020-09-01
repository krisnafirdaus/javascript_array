/*Buatlah sebuah data array yang berisi nama pada tim teman-teman.
Bagi tim menjadi 2 tim dan terdiri dari 1 orang leader
Console.log data array tersebut dengan memisahkan setiap data menggunakan  koma (,)
Tampilkan list data tersebut ke halaman HTML
hidden:
Cek built-in method Array
*/
let teamFootball = [
  "Messi",
  "Ronaldo",
  "Kaka",
  "Ronaldinho",
  "Gattuso",
  "Neuer",
  "Lampard",
  "gerrad",
  "Coutinho",
  "Puyol",
];

let teamLegend = teamFootball.slice(0, 5);
console.log(teamLegend);

document.getElementById("team1").innerHTML = teamLegend[0];
document.getElementById("team2").innerHTML = teamLegend[1];
document.getElementById("team3").innerHTML = teamLegend[2];
document.getElementById("team4").innerHTML = teamLegend[3];
document.getElementById("team5").innerHTML = teamLegend[4];

let teamNew = teamFootball.slice(5, 10);
console.log(teamNew);

document.getElementById("team6").innerHTML = teamNew[0];
document.getElementById("team7").innerHTML = teamNew[1];
document.getElementById("team8").innerHTML = teamNew[2];
document.getElementById("team9").innerHTML = teamNew[3];
document.getElementById("team10").innerHTML = teamNew[4];
