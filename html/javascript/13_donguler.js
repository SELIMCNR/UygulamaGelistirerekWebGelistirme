// Döngüler (Loops) - For Loop
// For Loop Syntax
let i = 0;
let toplam = 0;
for (i; i < 10; i++) {
  toplam += i;
}
console.log("Toplam: " + toplam);

let sayilar = [1, 4, 5, 8, 4, 3];
let toplam1 = 0;
for (let i = 0; i < sayilar.length; i++) {
  toplam1 += sayilar[i];
}
console.log("Toplam1: " + toplam1);
let toplam2 = 0;
for (let index in sayilar) {
  console.log(sayilar[index]);
  toplam2 += sayilar[index];
}

let user = {
  name: "John",
  username: "johndoe",
  age: 30,
  password: "12345",
  isAdmin: true,
};

for (let key in user) {
  console.log(key + ": " + user[key]);
}

// While Loop Syntax
