let urunler = ["iphone 12", "iphone 13", "iphone 13 pro max", "iphone 14"];
let fiyatlar = [10000, 20000, 30000, 40000]; // TL array
let renkler = ["kırmızı", "mavi", "yeşil", "sarı"]; // string array

console.log(urunler[0]); // iphone 12
console.log(urunler[1]); // iphone 13
console.log(urunler[2]);

console.log(`${urunler[0]} fiyatı: ${fiyatlar[0]} TL ve rengi: ${renkler[0]}`); // iphone 12 fiyatı: 10000 TL ve rengi: kırmızı
console.log(`${urunler[1]} fiyatı: ${fiyatlar[1]} TL ve rengi: ${renkler[1]}`);
console.log(`${urunler[2]} fiyatı: ${fiyatlar[2]} TL ve rengi: ${renkler[2]}`);

let urun1 = ["iphone 12", 10000, "kırmızı"];
let urun2 = [];
urun2[0] = "iphone 13";
urun2[1] = 20000;
urun2[2] = "mavi";
let urun3 = ["iphone 13 pro max", [30000, 40000, 50000, 60000, 70000], "yeşil"];

urun3[2] = "sarı"; // rengi değiştirme

console.log(urun3[1]); // [30000, 40000, 50000, 60000, 70000]
console.log(urun3[1][0]); // 30000
console.log(urun3[1][1]); // 40000
console.log(urun3[1][2]); // 50000
console.log(urun3[1][3]); // 60000
console.log(typeof urun3[1]); // object

let kursAdi = "Modern JavaScript Bootcamp";

console.log(kursAdi[5]); // n
console.log(kursAdi.split(" ")); // ["Modern", "JavaScript", "Bootcamp"]
console.log(kursAdi.split(" ")[3]); // Bootcamp

let ogrenciler = ["A ", "b"];
console.log(ogrenciler[0]); // A
sonuc = ogrenciler.length; // 2

// array to string
sonuc = ogrenciler.toString(); // A,b
sonuc = ogrenciler.join(" - "); // A - b
sonuc = ogrenciler.pop(); // son elemanı siler

// delete array
sonuc = ogrenciler.pop(); // son elemanı siler
sonuc = ogrenciler.shift(); // ilk elemanı siler

// add array
sonuc = ogrenciler.push("c"); // sona ekler
sonuc = ogrenciler.unshift("a"); // başa ekler
sonuc = ogrenciler.splice(1, 0, "b"); // 1. indexe b ekler

let markalar1 = ["apple", "samsung", "huawei"];
sonuc = markalar1.splice(0, 0, markalar1); // [["apple", "samsung", "huawei"]]
sonuc = markalar1.splice(0, 0, ...markalar1); // ["apple", "samsung", "huawei", "apple", "samsung", "huawei"]
sonuc = markalar1.splice(0, 1); // ["apple"]
sonuc = markalar1.splice(0, 2); // ["samsung", "huawei"]

// array methods : w3schools.com js array methods
