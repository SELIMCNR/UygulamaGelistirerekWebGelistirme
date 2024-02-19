let ad = "Selim";
let soyad = "Çınar";
let yas = 23;
let sehir = "Kahramanmaraş";

let mesaj =
  "Benim adım " +
  ad +
  " " +
  soyad +
  ", " +
  yas +
  " yaşındayım ve " +
  sehir +
  " şehrinde yaşıyorum."; // Benim adım Selim Çınar, 23 yaşındayım ve Kahramanmaraş şehrinde yaşıyorum.
//backtick
mesaj = `Benim adım ${ad} ${soyad}, ${yas} yaşındayım ve ${sehir} şehrinde yaşıyorum.`; // Benim adım Selim Çınar, 23 yaşındayım ve Kahramanmaraş şehrinde yaşıyorum.

// ternary operator
let emeklilik =
  65 - yas > 0
    ? "Emekliliğe " + (65 - yas) + "yıl kaldı."
    : "Zaten emekli oldunuz.";

console.log(mesaj);

let kursAdi = "Modern JavaScript Kursu";
let sonuc = kursAdi.length; // 21
sonuc = kursAdi.toLowerCase(); // küçük harf yapar
sonuc = kursAdi.toUpperCase(); // büyük harf yapar

sonuc = kursAdi.slice(0, 10); // Modern Jav (0. indexden 10. indexe kadar)
sonuc = kursAdi.slice(-10);
sonuc = kursAdi.slice(-10, -5);
sonuc = kursAdi.substring(0, 10); // Modern Jav (0. indexden 10. indexe kadar)
sonuc = kursAdi.substring(5); // n JavaScript Kursu substring: başlangıç indexi verir

sonuc = kursAdi.replace("JavaScript", "React"); // Modern React Kursu
sonuc = kursAdi.trim(); // baştaki ve sondaki boşlukları siler
sonuc = kursAdi.trimEnd(); // sondaki boşlukları siler
sonuc = kursAdi.trimStart(); // baştaki boşlukları siler

sonuc = kursAdi.indexOf("JavaScript"); // 7 (JavaScript kelimesinin başladığı index)
sonuc = kursAdi.split(" "); // ["Modern", "JavaScript", "Kursu"]
sonuc = kursAdi.split("")[3]; // e (3. indexi verir)
sonuc = kursAdi.split("", 3); // ["M", "o", "d"] (0. indexden 3. indexe kadar)

sonuc = kursAdi.concat(" ", "Dersleri"); // Modern JavaScript Kursu Dersleri
sonuc = kursAdi[0]; // M (ilk karakteri verir)
sonuc = kursAdi.charAt(0); // M (ilk karakteri verir)
sonuc = kursAdi.charCodeAt(0); // 77 (ASCII kodu)
sonuc = String.fromCharCode(77); // M (ASCII kodunu karaktere çevirir)
sonuc = kursAdi.includes("JavaScript"); // true (kursAdi içinde JavaScript var mı?)
sonuc = kursAdi.startsWith("Modern"); // true (kursAdi Modern ile mi başlıyor?)
sonuc = kursAdi.endsWith("Kursu"); // true (kursAdi Kursu ile mi bitiyor?)

console.log(sonuc);
