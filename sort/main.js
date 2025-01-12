//! 1--> Standart Sıralama (Stringlər)
// let fruits = ["Banana", "Apple", "Cherry"];
// fruits.sort();

// console.log(fruits);
// // Çıxış: ["Apple", "Banana", "Cherry"]

//? sort() burada stringləri Unicode sırasına əsasən sıralayır.






//! 2--> Standart Sıralama (Rəqəmlər)
// let numbers = [10, 5, 20, 15];
// numbers.sort();

// console.log(numbers);
// // Çıxış: [10, 15, 20, 5]

//? Problem: sort() rəqəmləri string kimi sıralayır, ona görə də düzgün nəticə vermir.
//? Həll: compareFunction istifadə edin
// let numbers = [10, 5, 20, 15];
// numbers.sort((a, b) => a - b);

// console.log(numbers);
// // Çıxış: [5, 10, 15, 20]

//? a - b qaydası:
//? Əgər a < b → a əvvəl gəlir.
//? Əgər a > b → b əvvəl gəlir.

//? Tərsinə sıralama (Descending Order):
// numbers.sort((a, b) => b - a);

// console.log(numbers);
// // Çıxış: [20, 15, 10, 5]






//! 3--> Obyektləri Sıralamaq. Rəqəmlər və stringlərdən başqa array-də obyektlər olduqda, obyektlərin müəyyən xassəsinə görə sıralamaq lazımdır.
//? Yaşa görə sıralama
// let people = [
//     { name: "Alice", age: 30 },
//     { name: "Bob", age: 25 },
//     { name: "Charlie", age: 35 }
// ];

// people.sort((a, b) => a.age - b.age);

// console.log(people);
// // Çıxış:
// // [
// //   { name: "Bob", age: 25 },
// //   { name: "Alice", age: 30 },
// //   { name: "Charlie", age: 35 }
// // ]


//? Adlara görə əlifba sıralaması:
// people.sort((a,b) => a.name.localeCompare(b.name));
// console.log(people);

// // Çıxış:
// // [
// //   { name: "Alice", age: 30 },
// //   { name: "Bob", age: 25 },
// //   { name: "Charlie", age: 35 }
// // ]

//? localeCompare stringləri əlifba sırasına görə müqayisə etmək üçün istifadə olunur.










//! 4--> Stringlərin Uzunluğuna görə Sıralama
// let words = ["apple",  "kiwi", "banana", "cherry",];
// words.sort((a, b) => a.length - b.length);

// console.log(words);
// // Çıxış: ["kiwi", "apple", "banana", "cherry"]





//! 5--> Təsadüfi Sıralama (Random Order)
// let items = [1, 2, 3, 4, 5];
// items.sort(() => Math.random() - 0.5);

// console.log(items);
// // Çıxış: Məsələn: [3, 5, 1, 4, 2] (hər dəfə fərqli nəticə)

//? Math.random() - 0.5 necə işləyir?
//? 1--> Math.random(): Bu metod 0 ilə 1 arasında təsadüfi bir ədəd qaytarır (0 daxil, 1 daxil deyil) 
//? Məsələn: 0.2, 0.8, 0.5, və s

//? 2--> Math.random() - 0.5: Qaytarılan təsadüfi ədəddən 0.5 çıxılır:
//? Əgər Math.random() 0.5-dən kiçikdirsə, nəticə mənfi olur.
//? Əgər Math.random() 0.5-dən böyükdürsə, nəticə müsbət olur

//? 0.5 ededinden Başqa ədəd istifadə etmək olarmı?
//? Əgər başqa bir ədəd (0.5 əvəzinə k) istifadə etsəniz, təsadüfiliyə təsir edə bilər:
//? Əgər k 0-a yaxın olsa (Math.random() - 0), təsadüfilik yüksək olar.
//? Əgər k çox böyük və ya çox kiçikdirsə, təsadüfilik aşağı düşər.

// items.sort(() => Math.random() - 0.3); // Daha çox müsbət nəticə qaytaracaq, yəni elementlər müəyyən qədər daha az təsadüfi olar.
// items.sort(() => Math.random() - 0.7); // Daha çox mənfi nəticə qaytaracaq, eyni səbəbdən təsadüfilik azalır.

//? -0.5 istifadə etmək balanslı təsadüfilik yaradır, çünki Math.random() ədədi 0 ilə 1 arasında simmetrik paylanıb və -0.5 balanslı müsbət və mənfi nəticə qaytarır. Bu səbəbdən başqa bir ədəd seçmək təsadüfilik keyfiyyətinə təsir edə bilər. Təsadüfi qarışdırma üçün ən uyğun seçim Math.random() - 0.5-dir.
