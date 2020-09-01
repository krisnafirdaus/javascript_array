// Buatlah sebuah multidimensional array yang berisikan nama hero  dan juga kekuatannya yang berada pada The Avengers.
// Tampilkan data tersebut pada sebuah tabel kecuali nama hero yang tidak memiliki huruf ‘a’

let avengersTeam = [
  ["Spiderman", "spiderweb"],
  ["Thanos", "Finger Snap"],
  ["Ironman", "Hightech"],
  ["Captain America", "Supersoldier"],
  ["Thor", "godly "],
  ["Hulk", "superhuman strengther"],
  ["Black Widow", "Espionage"],
  ["Hawkeye", "Arrow"],
  ["Winter Soldier", "cybernetic"],
  ["Thanos", "Finger Snap"],
];

let hasil = avengersTeam.filter((hero) => hero[0].includes("a"));

console.table(hasil);
