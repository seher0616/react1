//! SORU 1
//! isimler dizisin içerisindeki her ismi küçük harf olarak yeni bir diziye saklayınız.
const isimler = [
  'Ahmet',
  'mehmet',
  'ismet',
  'SAFFET',
  'Can',
  'Canan',
  'Cavidan',
];
const yeni = isimler.map(obj =>{
    return obj.toLocaleLowerCase()
})
console.log(yeni);

//! SORU 2 
//! A - users arrayin içindki her objeye fullName isimli bir property ekleyelim
//! B - yaşı 15e küçük eşit olanları youngPeople isimli bir arrayde toplayalım
//! C - ismi Sam olan objeyi bulalım

let users = [
    { firstName: "Susan",lastName: "Steward", age: 14 },
    { firstName: "Daniel",lastName: "Longbottom", age: 16 },
    { firstName: "Bruno",lastName: "Black", age: 56 },
    { firstName: "Jacob",lastName: "Joyo", age: 15 },
    { firstName: "Sam",lastName: "Drogo", age: 64 },
  ];

  users.map(obj => obj.fullName =obj.firstName+ " " +obj.lastName)
  console.log(users);
  const youngPeople = users.filter(obj => obj.age<=15)
  console.log(youngPeople);
console.log(users.find(obj => obj.firstName.toLocaleLowerCase()==="sam"));




//! SORU 4 calisan objesinde ilçe, ad soy-ad, python bilip bilmediğini ve maaşının 100000'in üstünde olup olmadığını  değerlerini consola yazdırınız



const calisan = {
  ad: 'Ahmet',
  "soy-ad": 'Yilmaz',
  yas: 30,
  is: 'developer',
  lokasyon: {sehir: "Ankara", ilce: "Kızılay"},
  diller: ['C', 'C++', 'Python', 'JS'],
  maas: 120000,
};
//! SORU 5 calısan objesine ait değerleri yas değerini güncelleyerek yeni bir obje içinde biriktiriniz
// console.log(calisan.lokasyon.ilce);
// console.log(calisan.ad,calisan["soy-ad"]);
// console.log(calisan.diller.includes("Python"));
// console.log(calisan.maas>100000);


//!sssssssssssssssssssssss
 const yas = calisan
 yas.yas =50
 console.log(calisan);

 //! SORU 5 araclar ve otomobiller dizilerini başka bir dizide birleştiriniz

//! SORU 5 araclar ve otomobiller dizilerini başka bir dizide birleştiriniz

const araclar = ['Ucak', 'Helikopter', 'Bisiklet'];
const otomobiller = ['Tır', 'Otobus', 'Araba', 'SUV'];
const x  = [ ...araclar, ...otomobiller]
console.log(x);

//* ÇÖZÜM 7
/* const {brand, model, owner: {name, surname}} = car
console.log(brand,model,name, surname) */

//! SORU 8 kullanıcıdan yaş değeri alan ve yaş >= 18 ise "You are ... years old and eligible to vote.", aksi halde "You are ... years old and not eligible to vote." uyarısı veren kodu if/else ve ternary kullanarak yazınız

//* ÇÖZÜM 8
/* 
const ageHandler = (age) => {
  if(typeof age !== "number" || age < 0) return "Wrong entry"

    if (age >= 18) {
      return `You are ${age} years old and eligible to vote`
    } else {
      return `You are ${age} years old and not eligible to vote`
    }

    return age >= 18 ? `You are ${age} years old and eligible to vote` : `You are ${age} years old and not eligible to vote`

    return `You are ${age} years old and ${age <= 18 ? "not " : ""}eligible to vote`

};

console.log(ageHandler(-3));
console.log(ageHandler(""));
console.log(ageHandler(20));
console.log(ageHandler(10));
 */


//! SORU 9 kullanıcının isim ve doğum tarihi değerlerini parametre olarak alan ve kullanıcın yaşını hesaplayan fonksiyonu function declaration ve arrow function ile yazınız

//* ÇÖZÜM 9

/* const ageCalculator = (birthDate) => {
  const presentDate = new Date().getTime()
  const newDate = new Date(birthDate).getTime()
  return new Date(presentDate - newDate).getUTCFullYear() - 1970
}

console.log(ageCalculator("07-04-2011")) */