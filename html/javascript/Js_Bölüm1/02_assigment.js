//node scriptadı.js
let sonuc;
let a = 10,
  b = 20,
  c = 30;
// 1-Aritmetik operatörler
sonuc = a + b;
sonuc = a - b;
sonuc = a * b;
sonuc = a / b;
sonuc = c % a; //c nin a ya bölümünden kalan
sonuc = c++; //c yi 1 arttır
sonuc = c--; //c yi 1 azalt
sonuc = ++c; //c yi 1 arttır
sonuc = --c; //c yi 1 azalt
// 2-Atama operatörleri
sonuc = a;
sonuc = sonuc + b; //sonuc += b;
sonuc += b; //sonuc = sonuc + b;
sonuc -= b; //sonuc = sonuc - b;
sonuc *= b; //sonuc = sonuc * b;
sonuc /= b; //sonuc = sonuc / b;
sonuc %= b; //sonuc = sonuc % b;

// 3-Karşılaştırma operatörleri
sonuc = a == b; //false
sonuc = a == "10"; //true
sonuc = a != "10"; //false
sonuc = a === "3"; //false Hem değer hem de tür kontrolü yapar
sonuc = a > b; //false
sonuc = a < b; //true
sonuc = a >= b; //false
sonuc = a <= b; //true
// 4-Mantıksal operatörler
sonuc = a < b && a < c; //true  && and
sonuc = a < b || a > c; //true  || or

console.log(sonuc);
console.log(a);
