let sonuc;
sonuc = 10; // Number
sonuc = "10"; // String
sonuc = Number(sonuc); // String to Number
sonuc = parseInt("10"); // String to Number
sonuc = parseFloat("10.5"); // String to Number
sonuc = parseInt("10a"); // String to Number 10
sonuc = parseInt("a10"); // String to Number NaN (Not a Number)

sonuc = isNaN("10"); // false  isNaN = is Not a Number
sonuc = isNaN("a10"); // true

let sayi = 10.1534646;
sonuc = sayi.toPrecision(5); // 10.153 5 digit
sonuc = sayi.toFixed(2); // 10.15 2 digit after comma

sonuc = Math.round(2.4); // 2
sonuc = Math.round(2.5); // 3
sonuc = Math.ceil(2.1); // 3
sonuc = Math.floor(2.9); // 2
sonuc = Math.sqrt(16); // 4
sonuc = Math.abs(-10); // 10
sonuc = Math.pow(2, 4); // 16
sonuc = Math.min(1, 2, 3, 4, 5); // 1
sonuc = Math.max(1, 2, 3, 4, 5); // 5
sonuc = Math.random(); // 0-1 arasında rastgele sayı üretir
sonuc = Math.random() * 20; // 0-20 arasında rastgele sayı üretir
sonuc = Math.floor(Math.random() * 20); // 0-20 arasında rastgele tam sayı üretir

console.log(typeof sonuc);
console.log(sonuc);
