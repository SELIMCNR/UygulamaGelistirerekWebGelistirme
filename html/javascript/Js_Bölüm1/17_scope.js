var isim = "a";
var yas = 10;
const adres = "istanbul"; // const ile tanımlanan değişkenlerin değeri değiştirilemez.
adres = "ankara"; // TypeError: Assignment to constant variable.

function f() {
  var isim = "b";
  var yas = 20;
  console.log("function scope: ", isim, yas);
}

if (true) {
  var isim = "ab";
  let cinsiyet = "erkek";
  console.log(isim, cinsiyet);
}

f(); // b
console.log(isim); // a
console.log(yas); //
console.log(cinsiyet); // ReferenceError: cinsiyet is not defined

// fonksiyonlar ve if blokları scope oluşturmazlar. Sadece for ve while blokları scope oluşturur.
// var ile tanımlanan değişkenler global scope oluşturur. let ve const ile tanımlanan değişkenler ise block scope oluşturur.  (if, for, while, function, switch, try-catch) gibi bloklar.
