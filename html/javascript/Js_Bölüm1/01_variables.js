//node scriptadı.js
console.log("Hello js");

var maasA = 5000;
var maasB = 4000;
var zam = 0.35;

console.log(maasA + maasA * zam);
console.log(maasB + maasB * zam);

//Türkçe karakter kullanılmamalı
//Arada boşluk bırakılmamalı
//Değişken isimleri sayı ile başlayamaz

var urunAdi = "iphone 13"; //String
let urunFiyat = 10000; //Number

console.log(typeof urunAdi);
console.log(typeof urunFiyat);

let sayi1 = "10";
let sayi2 = "20";
console.log(sayi1 + sayi2); //1020
console.log(Number(sayi1) + Number(sayi2)); //30  Number() fonksiyonu ile string ifadeyi numbera çevirebiliriz

let sayi3 = 100;
console.log(String(sayi3)); //100 String() fonksiyonu ile number ifadeyi stringe çevirebiliriz
console.log(sayi3.toString()); //100 toString() fonksiyonu ile number ifadeyi stringe çevirebiliriz

let isim = "Sena";
let soyad = "Turan";
console.log(isim + " " + soyad);

let basariliMi = true;
console.log(basariliMi);
console.log(typeof basariliMi); //boolean

let sınavNotu = 70;
let gectiMi = sınavNotu >= 50;
console.log(gectiMi); //true

let yas;
console.log(yas); //undefined
yas = "";
console.log(yas); //""
console.log(typeof yas); //string

// Uygulama
var öğrenci1İsim = "ada bilgi";
var öğrenci1Dogum = 2000;
var öğrenci1MatNot = 50,
  öğrenci1MatNot2 = 70,
  öğrenci1MatNot3 = 80;

var öğrenci2İsim = "yiğit bilgi";
var öğrenci2Dogum = 1999;
var öğrenci2MatNot = 70,
  öğrenci2MatNot2 = 60,
  öğrenci2MatNot3 = 90;

var yasOgrenci = new Date().getFullYear() - öğrenci1Dogum,
  yasOgrenci2 = new Date().getFullYear() - öğrenci2Dogum;
yaslar = yasOgrenci + " " + yasOgrenci2;
console.log(yaslar);

var ogrenciMatNotOrtalama1 =
  (öğrenci1MatNot + öğrenci1MatNot2 + öğrenci1MatNot3) / 3;

var ogrenciMatNotOrtalama2 =
  (öğrenci2MatNot + öğrenci2MatNot2 + öğrenci2MatNot3) / 3;

var ogrenci1geçti = ogrenciMatNotOrtalama1 >= 50;
var ogrenci2geçti = ogrenciMatNotOrtalama2 >= 50;

console.log(öğrenci1İsim + " " + ogrenci1geçti);
console.log(öğrenci2İsim + " " + ogrenci2geçti);
