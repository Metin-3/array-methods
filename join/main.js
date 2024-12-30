//! 1-->  Standart istifadə
// const fruits = ["apple", "banana", "cherry"];
// const result = fruits.join();
// console.log(result); // "apple,banana,cherry"


//! 2-->  Xüsusi ayrıcı ilə istifadə
// const fruits = ["apple", "banana", "cherry"];
// const result = fruits.join(" - ");
// console.log(result); // "apple - banana - cherry"


//! 3-->  Boş massiv
// const emptyArray = [];
// const result = emptyArray.join();
// console.log(result); // ""


//! 4--> Elementlər arasında boşluq ilə birləşdirmək
// const words = ["Hello", "world"];
// const result = words.join(" ");
// console.log(result); // "Hello world"


//! 5-->  Undefined və null elementlərin istifadəsi
// const mixedArray = ["JavaScript", undefined, "is", null, "fun"];
// const result = mixedArray.join(" ");
// console.log(result); // "JavaScript  is  fun"



//! 6--> Tək elementli massiv
// const singleElementArray = ["React"];
// const result = singleElementArray.join(" - ");
// console.log(result); // "React"



//! 7--> Rəqəm massivi ilə istifadə
// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.join(", ");
// console.log(result); // "1, 2, 3, 4, 5"


//! 8--> Boş elementlər olan massiv
// const sparseArray = ["one", , "three"];
// const result = sparseArray.join("-");
// console.log(result); // "one--three"



//!=============================================
//todo Praktik istifadə nümunələri:
//!=============================================

//! 1--> URL yaratmaq üçün:
// const urlParts = ["https:", "", "www.example.com", "about"];
// const url = urlParts.join("/");
// console.log(url); // "https://www.example.com/about"


//! 2-->  CSV (Comma-Separated Values) formatında sətir yaratmaq üçün:
// const data = ["Name", "Age", "City"];
// const csvLine = data.join(",");
// console.log(csvLine); // "Name,Age,City"


//! 3--> Şifrəli bir cümlə yaratmaq:
// const letters = ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"];
// const secretCode = letters.join("");
// console.log(secretCode); // "JavaScript"

