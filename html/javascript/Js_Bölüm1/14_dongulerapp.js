let sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 1 - sayilar listesindeki her bir elemanın karesini alarak ekrana yazdırınız.
for (let i = 0; i < sayilar.length; i++) {
  console.log(sayilar[i] * sayilar[i]);
}
// 2- sayilar listesindeki hangi saylar 5'in katıdır.
for (let i = 0; i < sayilar.length; i++) {
  if (sayilar[i] % 5 == 0) {
    console.log(sayilar[i]);
  }
}
// 3- sayilar listesindeki çift sayıların toplamını bulunuz.
let toplam = 0;
for (let i = 0; i < sayilar.length; i++) {
  if (sayilar[i] % 2 == 0) {
    toplam += sayilar[i];
  }
}
// 4 - urunler listesindeki tüm ürünleri büyük harf ile yazdırınız.
let urunler = ["Samsung a 10", "Samsung s 20", "Samsun a 30", "Samsung a 50"];
for (let i = 0; i < urunler.length; i++) {
  console.log(urunler[i].toUpperCase());
} //ELMA, ARMUT, MUZ, KIVI

// 5 - urunler listesinde içinde samsung geçen tüm ürünleri yazdırınız.
for (let i = 0; i < urunler.length; i++) {
  if (urunler[i].includes("Samsung")) {
    console.log(urunler[i]);
  }
} //Samsung a 10, Samsung s 20, Samsung a 30, Samsung a 50
// 6 - ogrenciler listesindeki her bir öğrencinin not ortalamasını bulunuz ve başarı durumunu yazdırınız.
let ogrenciler = [
  { ad: "A", notlar: [70, 60, 80] },
  { ad: "b", notlar: [50, 60, 70] },
  { ad: "c", notlar: [80, 60, 70] },
  { ad: "d", notlar: [90, 60, 70] },
];
console.log(ogrenciler[0].notlar);
for (let i = 0; i < ogrenciler.length; i++) {
  let ortalama = 0;
  for (let j = 0; j < ogrenciler[i].notlar.length; j++) {
    ortalama += ogrenciler[i].notlar[j];
  }
  ortalama = ortalama / ogrenciler[i].notlar.length;
  console.log(ogrenciler[i].ad + " " + (ortalama > 60 ? "geçti" : "kaldı"));
}
// A geçti, b kaldı, c geçti, d geçti
