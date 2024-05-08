let simdi = new Date(); // now date and time

// Get Methods
sonuc = simdi;
sonuc = simdi.getDate(); // now date
sonuc = simdi.getDay(); // now day  : 0:Sunday, 1:Monday, 2:Tuesday, 3:Wednesday, 4:Thursday, 5:Friday, 6:Saturday
sonuc = simdi.getFullYear(); // now year
sonuc = simdi.getHours(); // now hours
sonuc = simdi.getMinutes(); // now minutes
sonuc = simdi.getSeconds(); // now seconds
sonuc = simdi.getMilliseconds(); // now milliseconds
sonuc = simdi.getMonth(); // now month : 0:January, 1:February, 2:March, 3:April, 4:May, 5:June, 6:July, 7:August, 8:September, 9:October, 10:November, 11:December
sonuc = simdi.getTime(); // now time

// Set Methods
simdi.setFullYear(2025); // set year
simdi.setMonth(11); // set month : 0:January, 1:February, 2:March, 3:April, 4:May, 5:June, 6:July, 7:August, 8:September, 9:October, 10:November, 11:December
simdi.setDate(25); // set date : 1-31

sonuc = simdi;

let dogumTarihi = new Date(1990, 5, 13);
sonuc = simdi.getFullYear() - dogumTarihi.getFullYear(); // Age
sonuc = simdi - dogumTarihi; // Age in milliseconds

let milliseconds = simdi - dogumTarihi; // Age in milliseconds
let seconds = milliseconds / 1000; // Age in seconds
let minutes = seconds / 60; // Age in minutes
let hours = minutes / 60; // Age in hours
let days = hours / 24; // Age in days

sonuc = seconds;
// JavaScript Date Format learn : https://www.w3schools.com/js/js_date_formats.asp

console.log(typeof sonuc);
console.log(sonuc);
