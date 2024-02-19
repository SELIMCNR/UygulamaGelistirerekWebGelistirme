if (3 > 4) {
  console.log("3, 4'ten büyüktür");
}

let isLoggedin = true;
if (isLoggedin) {
  console.log("Kullanıcı giriş yaptı");
} else {
  console.log("Kullanıcı giriş yapmadı");
}

if (!isLoggedin) {
  // ! değil işareti ile true ise false, false ise true yapar
  console.log("Kullanıcı giriş yapmadı");
}

let userName = "admin"; //admin
isLoggedin = userName == "admin";
if (isLoggedin) {
  console.log("Kullanıcı giriş yaptı");
} else {
  console.log("Kullanıcı giriş yapmadı");
}

userName = "Selim Çınar";
let password = "123456";

if (userName == "Selim Çınar") {
  if (password == "123456") {
    console.log("Giriş başarılı");
  } else {
    console.log("Parola yanlış");
  }
} else {
  console.log("Kullanıcı adı yanlış");
}

// İf-else 2
let yas = 20;
let mezuniyet = "Üniversite";
if (yas >= 18 && (mezuniyet == "Lise" || mezuniyet == "Üniversite")) {
  console.log("Ehliyet alabilir");
} else {
  console.log("Ehliyet şartları sağlanmıyor");
}
// and ,true && true = true, true && false = false, false && true = false, false && false = false
// or, true || true = true, true || false = true, false || true = true, false || false = false
// not, !true = false, !false = true
