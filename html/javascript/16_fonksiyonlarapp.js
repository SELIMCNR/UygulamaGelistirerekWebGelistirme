// 1 - Kendisine gönderilen kelimeyi belirtilen kez ekranda gösteren fonksiyonu yazınız.
function mesajYazdir(kelime, adet) {
  for (let i = 0; i < adet; i++) {
    console.log(kelime);
  }
}
mesajYazdir("Merhaba", 5);
mesajYazdir("Nasılsınız ?", 3);
// 2 -Dikdörtgenin alanını ve çevresini hesaplayan bir fonksiyon yazınız. Bu fonksiyon parametre olarak kenarları almalıdır.
function diktörgenHesapla(kenar1, kenar2) {
  let alan = kenar1 * kenar2;
  let cevre = 2 * (kenar1 + kenar2);
  return `Alan: ${alan}, Çevre: ${cevre}`;
}

// 3 -Yazı tura uygulaması yapacağız. Öncelikle kullanıcıdan kaç kez yazı tura oynamak istediğini alalım. Daha sonra kullanıcının kaç kez yazı tura oynadığını tutan bir obje oluşturalım. Her yazı tura atışında bunu kontrol edip kazananı console'a yazdıralım.
function yazıTuraOyna(adet) {
  let yazı = 0;
  let tura = 0;
  for (let i = 0; i < adet; i++) {
    let sayi = Math.round(Math.random());
    if (sayi === 0) {
      yazı++;
    } else {
      tura++;
    }
  }
  return `Yazı: ${yazı}, Tura: ${tura}`;
}
console.log(yazıTuraOyna(100));

// 4- Kendisine gönderilen bir sayının tam bölenlerini bir dizi olarak döndüren bir fonksiyon yazınız.
function tamBolenler(sayi) {
  let tamBolenler = [];
  for (let i = 1; i <= sayi; i++) {
    if (sayi % i === 0) {
      tamBolenler.push(i);
    }
  }
  return tamBolenler;
}
console.log(tamBolenler(20));

// 5-Değişken sayıda parametre alan toplam isminde bir fonksiyon tanımla.
function toplam() {
  let toplam = 0;
  for (let i = 0; i < arguments.length; i++) {
    toplam += arguments[i];
  }
  return toplam;
}
console.log(toplam(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
