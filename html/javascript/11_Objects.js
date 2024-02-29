// dict ,json both are objects

let kullanici = {
  ad: "Selim",
  soyad: "Çınar",
  yas: 25,
  adres: {
    sehir: "Kahramanmaraş",
    mahalle: "Dulkadiroğlu",
  },
  hobiler: ["Sinema", "Kitap", "Spor", "Yazılım"],
};

let kullaniciB = {
  ad: "Yusuf",
  soyad: "Çınar",
  yas: 25,
  adres: {
    sehir: "Kahramanmaraş",
    mahalle: "Dulkadiroğlu",
  },
  hobiler: ["Sinema", "Kitap", "Spor", "Yazılım"],
};

let sonuc;
sonuc = kullanici.ad; // Selim
sonuc = kullanici.soyad; // Çınar
sonuc = kullanici.adres.sehir; // Kahramanmaraş
sonuc = kullanici.adres.mahalle; // Dulkadiroğlu
sonuc = kullanici["yas"]; // 25
sonuc = kullanici.hobiler; // ["Sinema", "Kitap", "Spor", "Yazılım"]
sonuc = kullanici.hobiler[0]; // Sinema
console.log(sonuc);

let kullanicilar = [kullanici, kullaniciB];

sonuc = kullanicilar[0]; // Selim
sonuc = kullanicilar[0].ad; // Selim
sonuc = kullanicilar[1]; // Yusuf

console.log(sonuc);

let urunler = [
  { id: 1, name: "Samsung S8", price: 3000 },
  { id: 2, name: "Samsung S7", price: 2000 },
  { id: 3, name: "Samsung S6", price: 1000 },
];
sonuc = urunler[0].name; // Samsung S8
sonuc = urunler[1].price; // 2000
console.log(sonuc);
