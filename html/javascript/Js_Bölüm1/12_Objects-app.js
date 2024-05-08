let siparis1 = {
  siparis_id: 101,
  siparis_tarihi: "2021-01-01",
  odeme_şekli: "Kredi Kartı",
  kargo_adresi: {
    mahalle: "Kızılay",
    ilce: "Çankaya",
    sehir: "Ankara",
  },
  urunler: [
    {
      urunid: 5,
      urunadi: "Kazak",
      urunurl: "https://www.kazak.com/kazak.jpg",
      urunfiyat: 100,
    },
    {
      urunid: 6,
      urunadi: "gömlek 45",
      urunurl: "https://www.kazak.com/kazak.jpg",
      urunfiyat: 1000,
    },
  ],
};

let siparis2 = {
  siparis_id: 101,
  siparis_tarihi: "2021-01-01",
  odeme_şekli: "Kredi Kartı",
  kargo_adresi: {
    mahalle: "Kızılay",
    ilce: "Çankaya",
    sehir: "Ankara",
  },
  urunler: [
    {
      urunid: 5,
      urunadi: "Pantol 45",
      urunurl: "https://www.kazak.com/kazak.jpg",
      urunfiyat: 1000,
    },
    {
      urunid: 6,
      urunadi: "Kazak 45",
      urunurl: "https://www.kazak.com/kazak.jpg",
      urunfiyat: 1000,
    },
  ],
};
let siparis1toplam =
  (siparis1.urunler[0].urunfiyat + siparis1.urunler[0].urunfiyat) * 1.18; // 1100

let siparis2toplam =
  (siparis2.urunler[0].urunfiyat + siparis2.urunler[0].urunfiyat) * 1.18; // 2360

console.log("Sipariş 1: " + siparis1toplam);
console.log("Sipariş 2: " + siparis2toplam);

let toplam = siparis1toplam + siparis2toplam;
console.log("Toplam ödenen miktar: " + toplam); // 3460

let sipariler = [siparis1, siparis2];
