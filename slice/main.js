//! 1. Sadə istifadə
// const fruits = ["alma", "armud", "banan", "gilas", "nar"];
// const slicedFruits = fruits.slice(1, 4);

// console.log(slicedFruits); // ["armud", "banan", "gilas"]
// console.log(fruits); // ["alma", "armud", "banan", "gilas", "nar"] (dəyişməz)

//? start = 1: "armud" indeksindən başlayır.
//? end = 4: "nar" daxil edilmədən dayanır.







//! 2. start və end parametrlərini atlamaq
// const numbers = [10, 20, 30, 40, 50];

// // Bütün elementləri kopyalamaq
// const copy = numbers.slice();
// console.log(copy); // [10, 20, 30, 40, 50]

//? Parametrsiz istifadə edildikdə, massiv tam olaraq kopyalanır.








//! 3. Mənfi indekslər
// const letters = ["a", "b", "c", "d", "e", "f"];
// const slicedLetters = letters.slice(-4, -1);

// console.log(slicedLetters); // ["c", "d", "e"]

//? start = -4: Sondan 4-cü elementdən başlayır ("c").
//? end = -1: Sondan 1-ci elementə qədər ("f" daxil edilmir).







//! 4. Təkcə başlanğıc indeksini təyin etmək
// const colors = ["qırmızı", "yaşıl", "mavi", "sarı", "qara"];
// const fromIndex2 = colors.slice(2);

// console.log(fromIndex2); // ["mavi", "sarı", "qara"]

//? start = 2: "mavi"dən başlayır və sona qədər seçir.




//! 5. slice() ilə sətirlərin işlənməsi
// const text = "Hello, World!";
// const partOfText = text.slice(7, 12);

// console.log(partOfText); // "World"



//! =====================
//todo  Nümunələr – Praktik İstifadə
//! =====================

//! 1. Ən son elementləri almaq
// const array = [1, 2, 3, 4, 5];
// const lastTwo = array.slice(-2);

// console.log(lastTwo); // [4, 5]


//! 2. Dəyişiklik etmədən orijinal məlumat üzərində işləmək
// const names = ["Ayxan", "Günel", "Nihad", "Elvin"];
// const selectedNames = names.slice(1, 3);

// console.log(selectedNames); // ["Günel", "Nihad"]
// console.log(names); // ["Ayxan", "Günel", "Nihad", "Elvin"] (orijinal dəyişməz qalır)