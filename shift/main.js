//! 1-->  Əsas İstifadə
// const fruits = ["apple", "banana", "cherry"];
// const firstElement = fruits.shift();
// console.log(firstElement); // "apple"
// console.log(fruits);       // ["banana", "cherry"]


//! 2--> Boş Massivdə İstifadə
// const emptyArray = [];
// const firstElement = emptyArray.shift();
// console.log(firstElement); // undefined
// console.log(emptyArray);   // []


//! 3--> Tək Elementli Massiv
// const singleElementArray = ["apple"];
// const firstElement = singleElementArray.shift();
// console.log(firstElement); // "apple"
// console.log(singleElementArray); // []


//! 4--> Rəqəm Massivində İstifadə
// const numbers = [1, 2, 3, 4];
// const firstNumber = numbers.shift();
// console.log(firstNumber);  // 1
// console.log(numbers);      // [2, 3, 4]


//! 5--> Qarışıq Elementlərdə İstifadə
// const mixedArray = ["first", 42, null, undefined];
// const firstElement = mixedArray.shift();
// console.log(firstElement); // "first"
// console.log(mixedArray);   // [42, null, undefined]





//!====================================
//todo Praktik İstifadə Nümunələri
//!====================================

//! 1--> Sıra (Queue) Yaddaş İdarəsi
//! shift() metodu, "ilk daxil olan ilk çıxar" (FIFO) prinsipi ilə işləyən sıranın idarəsində istifadə olunur.
// const queue = [];
// queue.push("Task 1");
// queue.push("Task 2");
// queue.push("Task 3");

// console.log(queue.shift()); // "Task 1"
// console.log(queue);         // ["Task 2", "Task 3"]



//! 2--> Məlumatların Proses Edilməsi.
//!  Massivin əvvəlindən elementləri bir-bir çıxarıb proses etmək.
// const tasks = ["Task 1", "Task 2", "Task 3"];
// while (tasks.length > 0) {
//     const currentTask = tasks.shift();
//     console.log(`Processing: ${currentTask}`);
// }
// console.log(tasks); // []



//! 3--> İlk Elementi Ayrı Saxlama
//! Massivin ilk elementini götürərək digər elementlərlə ayrıca işləmək.
// const people = ["John", "Jane", "Doe"];
// const leader = people.shift();
// console.log(`Leader: ${leader}`); // "Leader: John"
// console.log(`Remaining: ${people}`); // "Remaining: Jane,Doe"
