//! 1--> Element Silmək
// let fruits = ["apple", "banana", "cherry", "date"];

// // "banana" və "cherry" silinir
// let removed = fruits.splice(1, 2);

// console.log(fruits);  // ["apple", "date"]
// console.log(removed); // ["banana", "cherry"]

//? start = 1: Silmə 1-ci indeksdən başlayır.
//? deleteCount = 2: İki elementi silir.






//! 2-->  Element Əlavə Etmək
// let colors = ["red", "green", "blue"];

// // "yellow" və "purple" əlavə olunur
// colors.splice(1, 0, "yellow", "purple");

// console.log(colors); // ["red", "yellow", "purple", "green", "blue"]

//? start = 1: Əlavə 1-ci indeksdə başlayır.
//? deleteCount = 0: Heç bir element silinmir.
//? Yeni elementlər: "yellow", "purple"






//! 3--> Həm Silmək, Həm də Əlavə Etmək
// let numbers = [10, 20, 30, 40, 50];

// // 20 və 30 silinir, əvəzində 25 və 35 əlavə olunur
// numbers.splice(1, 2, 25, 35);

// console.log(numbers); // [10, 25, 35, 40, 50]

//? start = 1: 1-ci indeksdən başlayır.
//? deleteCount = 2: İki elementi silir.
//? Yeni elementlər: "25", "35".






//! 4--> Mənfi İndeksdən İstifadə
// let letters = ["a", "b", "c", "d", "e"];

// // Son iki elementi silir
// let removed = letters.splice(-2, 2);

// console.log(letters); // ["a", "b", "c"]
// console.log(removed); // ["d", "e"]

//? start = -2: Massivin sonundan ikinci elementdən başlayır.
//? deleteCount = 2: İki elementi silir.






//! 5--> Bütün Elementləri Silmək
// let items = [1, 2, 3, 4, 5];

// // Bütün elementləri sil
// items.splice(0);

// console.log(items); // []

//? start = 0: 0-cı indeksdən başlayır.
//? deleteCount verilmir: Massivin bütün elementlərini silir







//todo =========================================
//! Advanced Məsələlər
//todo =========================================

//! Misal 1 --> Massivdən Element Tapıb Silmək
// let names = ["Alice", "Bob", "Charlie", "Diana"];

// // "Charlie" tapılır və silinir
// let index = names.indexOf("Charlie");
// if (index !== -1) {
//     names.splice(index, 1);
// }

// console.log(names); // ["Alice", "Bob", "Diana"]

//? Məntiq: Əvvəlcə indexOf() ilə elementin indeksini tapırıq, sonra splice() ilə silirik.
//? indexOf() metodu massivdə verilmiş dəyərin ilk yerləşdiyi indeksini qaytarır. Əgər həmin dəyər tapılmazsa, -1 qaytarır.






//! Misal 2 --> Elementləri Əvəz Etmək
// let scores = [50, 60, 70, 80];

// // 60 və 70 əvəz olunur
// scores.splice(1, 2, 65, 75);

// console.log(scores); // [50, 65, 75, 80]






//! Misal 3 --> Massivdən Sadəcə Tək Rəqəmləri Silmək:
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = numbers.length - 1; i >= 0; i--) {
//     if (numbers[i] % 2 !== 0) {
//         numbers.splice(i, 1);
//     }
// }

// console.log(numbers); // [2, 4, 6, 8]

//? Niyə arxa tərəfdən iterasiya edirik?
//? splice() massivin uzunluğunu dəyişdirdiyi üçün irəli iterasiya etmək səhvlərə səbəb ola bilər. Elementləri silərkən (istifadə olunan splice metodu ilə) massiv dəyişir. Geriyə doğru dövr etməklə, bu dəyişikliklərin digər elementlərə təsiri qarşısı alınır.

//? numbers.length - 1: Bu, massivdəki sonuncu elementin indeksini göstərir (bu halda 8).
//? i >= 0: Dövrün massivdəki ilk elementə (index = 0) qədər davam etməsini təmin edir.
//? i--: Hər dövr keçdikdən sonra i dəyəri 1 azalır.