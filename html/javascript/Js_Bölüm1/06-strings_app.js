let url =
  "https://www.google.com/search?q=js&oq=js&aqs=chrome..69i57j0l7.1234j0j7&sourceid=chrome&ie=UTF-8";
let kursAdi = "Modern JavaScript Kursu";

//1- url kaç karakterlidir?
let sonuc;
sonuc = url.length;

// 2 -kursadi kaç kelimeden oluşmaktadır?
sonuc = kursAdi.split(" ").length;

// 3 - url http mi https mi ile başlıyor?
sonuc = url.startsWith("https");
if (sonuc) {
  console.log("https");
}

// 4 - kursAdi içinde JavaScript var mı?
sonuc = kursAdi.includes("JavaScript");

// 5 url ve kursAdi değişkenlerini kullanarak aşağıdaki çıktıyı elde edin.
//    "Kursun başlığı: Modern JavaScript Kursu, url: https://www.google.com/search?q=js&oq=js&aqs=chrome..69i57j0l7.1234j0j7&sourceid=chrome&ie=UTF-8"

sonuc = `Kursun başlığı: ${kursAdi}, url: ${url}`;
kursAdi = kursAdi.replaceAll(" ", "-");
console.log(sonuc);
