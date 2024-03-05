function selamlama(cümle) {
  console.log(cümle);
}
selamlama("Selam");
selamlama("Merhaba");
selamlama("İyi günler ?");

function yasHesapla(dogumYili) {
  return new Date().getFullYear() - dogumYili;
}

let bYas = yasHesapla(1990);
let cYas = yasHesapla(1995);

console.log(bYas, cYas);

function emeklilikKontrol(dogumYili, isim) {
  let yas = yasHesapla(dogumYili);
  let emeklilik = 65 - yas;
  if (emeklilik > 0) {
    console.log(`${isim} emekli olmanıza ${emeklilik} yıl kaldı.`);
  } else {
    console.log("Zaten emeklisiniz.");
  }
}
