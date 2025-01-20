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






//! =========================
//! TASK
//! =========================

//! TASK-1 Massivin Müəyyən Bir Hissəsini Kopyalamaq
//! Verilən massivdən yalnız müəyyən elementləri kopyalayıb yeni bir massiv yarat:  Yeni massivdə yalnız ["pişik", "quş", "at"] olsun.

// const animals = ["it", "pişik", "quş", "at", "balıq", "ilan"];

// const newAnimals = animals.slice(1, 4)
// console.log(newAnimals);





//! TASK-2 Son X Elementi Seç
//! Bir massivdən yalnız son 3 elementi seç:
//! Nəticə: [50, 60, 70]

// const numbers = [10, 20, 30, 40, 50, 60, 70];

// const newNumbers = numbers.slice(-3)
// console.log(newNumbers);






//! TASK-3 Orijinalı Qoruyaraq Submassiv Yarat
//! Orijinalı dəyişmədən massivdən "gilas" ilə "nar" arasında yerləşən elementləri götür:
//! Nəticə: ["gilas", "banan", "nar"]

// const fruits = ["alma", "armud", "gilas", "banan", "nar", "şaftalı"];

// const newFruits = fruits.slice(-4, -1)
// const newFruits = fruits.slice(2, 5)
// console.log(newFruits);






//! TASK-4 Mənfi İndekslərlə Elementləri Seç
//! Mənfi indekslərdən istifadə edərək "c" ilə "e" arasında yerləşən hərfləri seç:
//! Nəticə: ["c", "d", "e"]

// const letters = ["a", "b", "c", "d", "e", "f", "g"];

// const newLetters = letters.slice(-5, -2);
// console.log(newLetters);







//! TASK-5 Massivi Tam Kopyala
//! Verilmiş massivdən tam bir kopya yarad və həmin kopyada dəyişiklik et, amma orijinal dəyişməsin:
//! Yeni massivdə sonuncu rəngi sil (kopyalanmış massivdə)

// const colors = ["qırmızı", "yaşıl", "mavi", "sarı"];

// const copyColors = colors.slice();
// console.log(copyColors);

// const newCopyColors = copyColors.pop();

// console.log(newCopyColors);
// console.log(copyColors);







//! TASK-6  Sətirlərlə İşləmək
//! Verilmiş cümlənin yalnız müəyyən bir hissəsini seç:
//! Yeni sətir: "slice() metodu"

// const sentence = "JavaScript-in slice() metodu çox faydalıdır.";

// const newSentence = sentence.slice(14, 29)
// console.log(newSentence);





//! TASK-7  Dinamik İstifadə
//! Funksiya yaz ki, verilən massiv və başlanğıc və bitmə indekslərinə görə yeni massiv yaratsın:

// function customSlice(array, start, end) {
//     return array.slice(start, end);
// }

// const result = customSlice([1, 2, 3, 4, 5], 1, 4);
// // Nəticə: [2, 3, 4]

// console.log(result);





//! TASK-8 Sonuncu Sözləri Seç
//! Bir sətirdəki son 2 sözü seçən funksiya yaz:
//! Nəticə: "çalışmaq lazımdır"

// const sentence = "Senior developer olmaq üçün çox çalışmaq lazımdır.";

// const newSentence = sentence.slice(-19, -1)
// console.log(newSentence);


// function getLastWords(sentence, count) {
//     const words = sentence.split(" "); // Sətiri sözlərə parçalayır.
//     return words.slice(-count).join(" "); // Son `count` qədər sözü seçir və birləşdirir.
//   }
  
//   const result = getLastWords(
//     "Senior developer olmaq üçün çox çalışmaq lazımdır.",
//     2
//   );
  
//   console.log(result); // "çalışmaq lazımdır"
  






//! TASK-9 Dinamik Son X Elementi Tap
//! Bir funksiya yaz ki, verilmiş massivdən son X elementi seçsin:

// function getLastElements(array, x) {
//     return array.slice(-x)
// }

// const result = getLastElements([5, 10, 15, 20, 25], 2);
// // Nəticə: [20, 25]




//! TASK-10 Massivdən Cüt Elementləri Tap
//! Bir funksiya yaz ki, massivdə cüt indekslərdə olan elementləri çıxarıb yeni massiv yaratsın:

// function getEvenIndexElements(array) {
//     // Slice və dövr ilə həll et
//     array.slice()
// }

// const result = getEvenIndexElements(["a", "b", "c", "d", "e", "f"]);
// Nəticə: ["a", "c", "e"]

// function getEvenIndexElements(array) {
//     let result = [];
//     for (let i = 0; i < array.length; i += 2) {
//       result.push(array[i]);
//     }
//     return result;
//   }
  
//   const result = getEvenIndexElements(["a", "b", "c", "d", "e", "f"]);
  
//   console.log(result); // ["a", "c", "e"]
  



//! TASK-11 Massivdən Ortanı Seç
//!   Bir massivdən ortadakı elementləri seçən funksiya yaz (massivin uzunluğu təkdirsə, yalnız 1 element seçilsin):
// function getMiddleElements(array) {
//     // Slice istifadə et
//   }
  
//   const result1 = getMiddleElements([1, 2, 3, 4, 5]); // Nəticə: [3]
//   const result2 = getMiddleElements([1, 2, 3, 4, 5, 6]); // Nəticə: [3, 4]
  


//   function getMiddleElements(array) {
//     const length = array.length;
//     if (length % 2 === 1) {
//       // Tək uzunluq
//       return array.slice(Math.floor(length / 2), Math.floor(length / 2) + 1);
//     } else {
//       // Cüt uzunluq
//       return array.slice(length / 2 - 1, length / 2 + 1);
//     }
//   }
  
//   const result1 = getMiddleElements([1, 2, 3, 4, 5]); // [3]
//   const result2 = getMiddleElements([1, 2, 3, 4, 5, 6]); // [3, 4]
  
//   console.log(result1); // [3]
//   console.log(result2); // [3, 4]
  




