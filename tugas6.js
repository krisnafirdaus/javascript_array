/*Buatlah sebuah program registrasi berisi username dan password
Lakukan validasi berikut
Username minimal 6 karakter
Password minimal 8 karakter
Saat user melakukan registrasi simpan data didalam Array
Tampilkan data setiap user melakukan registrasi
Saat password ditampilkan, ganti dengan string yang berbeda. Gunakan replace method.*/

function myFunction6() {
  let username = [];
  let password = [];

  username.push(prompt("Username (min. 6 karakter)"));
  password.push(prompt("Username (min. 8 karakter)"));

  let changePassword = password.replace(password, "krisnafi");

  alert(username);
  alert(changePassword);
}
