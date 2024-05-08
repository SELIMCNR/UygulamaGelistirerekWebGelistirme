// 1- "Elma,Armut,Kiraz,Üzüm" elemanlarına sahip bir dizi oluşturun.
let meyveler = ["Elma", "Armut", "Muz", "Çilek"];
// 2- Dizi kaç elemanlıdır?
console.log(meyveler.length);
// 3- Dizinin ilk ve son elemanı nedir?
console.log(meyveler[0]); // Elma

console.log(meyveler[meyveler.length - 1]); // Çilek
// 4- Elma dizinin bir elemanı mıdır?
console.log(meyveler.includes("Elma")); // true
console.log(meyveler.indexOf("Elma") > -1); // true
// 5- Kiraz meyvesini dizinin sonuna ekleyin.
meyveler[meyveler.length] = "Kiraz"; // Alternatif
console.log(meyveler);
meyveler.push("Kiraz"); // meyveler[meyveler.length] = "Kiraz"; ile aynı işlemi yapar.
console.log(meyveler);
// 6- Dizinin son 2 elemanını siliniz.
meyveler.pop(); // son elemanı siler.
meyveler.pop(); // son elemanı siler.
console.log(meyveler);
meyveler.splice(meyveler.length - 2, 2); // sondan 2 elemanı siler.
console.log(meyveler);
// 7- Aşağıdaki bilgileri dizi içerisinde saklayınız ve her öğrencinin yaşını ve not ortalamasını hesaplayınız.
/*
    Öğrenci 1 : Yiğit Bilgi 2010 (80, 90, 70)
    Öğrenci 2 : Sena Turan 1999 (80, 90, 70)
    Öğrenci 3 : Ahmet Turan 1998 (80, 90, 70)
*/

let ogr1 = ["Yiğit", "Bilgi", 2010, [80, 90, 70]];
let ogr2 = ["Sena", "Turan", 1999, [80, 90, 70]];
let ogr3 = ["Asım", "Turan", 1998, [80, 90, 70]];

let ogrenciler = [ogr1, ogr2, ogr3];
console.log(ogrenciler);

let yiğitYas = new Date().getFullYear - ogrenciler[0][2]; // 2010
let ada_Yas = new Date().getFullYear - ogrenciler[1][2]; // 1999
let asım_yas = new Date().getFullYear - ogrenciler[2][2]; // 1998
console.log(yiğitYas);

let yiğitOrtalama =
  (ogrenciler[0][3][0] + ogrenciler[0][3][1] + ogrenciler[0][3][2]) / 3;
let ada_not =
  (ogrenciler[1][3][0] + ogrenciler[1][3][1] + ogrenciler[1][3][2]) / 3;
let asım_not =
  (ogrenciler[2][3][0] + ogrenciler[2][3][1] + ogrenciler[2][3][2]) / 3;

console.log(yiğitOrtalama.toFixed(1), ada_not.toFixed(1), asım_not.toFixed(1));
