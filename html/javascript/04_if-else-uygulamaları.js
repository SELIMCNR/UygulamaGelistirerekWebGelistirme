// 1- Bir sayının 10-50 arasında olup olmadığını kontrol ediniz.
let sayi = 20;
if (sayi >= 10 && sayi <= 50) {
  console.log("Sayı 10-50 arasındadır");
}

// 2- Bir sayının pozitif tek sayı olduğunu kontrol ediniz.
if (sayi > 0 && sayi % 2 == 1) {
  console.log("Sayı pozitif tek sayıdır");
}
// 3- x,y,z sayılarını büyüklük olarak karşılaştırınız.
x = 10;
y = 20;
z = 15;
if (x < y && y < z) {
  console.log("x < y < z");
} else if (x < z && z < y) {
  console.log("x < z < y");
} else if (y < z && z < x) {
  console.log("y < z < x");
}
// 4- 2 vize ve 1 final notuna göre hesaplanan ortalama için:
vize = 50;
vize2 = 60;
final = 50;
//    a- Ortalama 50 ve üzeri = geçti
ortalama = (vize * 0.4 + vize2 * 0.4 + final * 0.6) / 3;
if (ortalama >= 50) {
  console.log("Geçti");
} else {
  console.log("Kaldı");
}
//    b- Geçme durumu, 50 üzerinde olsada ve final notu en az 50 olmalıdır.
if (ortalama >= 50 && final >= 50) {
  console.log("Geçti");
} else {
  console.log("Kaldı");
}

//    c- final notu 70 ve üzeri ise ortalamın önemi olmadan geçti
if (ortalama >= 50 || final >= 70) {
  console.log("Geçti");
} else {
  console.log("Kaldı");
}
