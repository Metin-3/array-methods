//! 1--> Tək Element Əlavə Edilməsi
// const fruits = ["apple", "banana"];
// const newLength = fruits.push("cherry");
// console.log(fruits);      // ["apple", "banana", "cherry"]
// console.log(newLength);   // 3


//! 2--> Bir Neçə Element Əlavə Edilməsi
// const numbers = [1, 2, 3];
// const newLength = numbers.push(4, 5, 6);
// console.log(numbers);     // [1, 2, 3, 4, 5, 6]
// console.log(newLength);   // 6


//! 3--> Boş Massivə Əlavə
// const emptyArray = [];
// const newLength = emptyArray.push("first");
// console.log(emptyArray);  // ["first"]
// console.log(newLength);   // 1


//! 4--> Rəqəmlər və Sətirlər Qarışıq Halda
// const mixedArray = [1, "two", 3];
// mixedArray.push(4, "five");
// console.log(mixedArray);  // [1, "two", 3, 4, "five"]


//! 5--> Undefined və null Əlavə Edilməsi
// const data = [10, 20];
// data.push(undefined, null);
// console.log(data);        // [10, 20, undefined, null]


//! 6--> Yeni Uzunluğu İzləmə
// const names = ["Alice", "Bob"];
// const lengthAfterFirstPush = names.push("Charlie");
// console.log(lengthAfterFirstPush); // 3
// const lengthAfterSecondPush = names.push("David", "Eve");
// console.log(lengthAfterSecondPush); // 5





//!=====================================
//todo Praktik İstifadə Nümunələri
//!=====================================

//! 1--> Dinamik Siyahı İdarəetməsi
//! Bir siyahıya yeni tapşırıqlar əlavə etmək üçün istifadə edilə bilər.
// const tasks = [];
// tasks.push("Task 1");
// tasks.push("Task 2", "Task 3");
// console.log(tasks); // ["Task 1", "Task 2", "Task 3"]



//! 2--> LIFO (Last In, First Out) Yığın Əməliyyatları
//! push() metodu pop() metodu ilə birlikdə yığın əməliyyatlarında istifadə olunur.
// const stack = [];
// stack.push(10);
// stack.push(20);
// stack.push(30);
// console.log(stack);       // [10, 20, 30]
// console.log(stack.pop()); // 30
// console.log(stack);       // [10, 20]


//! 3--> Yeni Elementlər Əlavə Edərək Massivin Dinamik Böyüdülməsi
// const items = ["pen", "pencil"];
// items.push("eraser", "marker");
// console.log(items); // ["pen", "pencil", "eraser", "marker"]


//! 4-->  API-dən Gələn Məlumatları Saxlama. Bir massivə API-dən alınan məlumatları əlavə etmək.
// let data = [];
// data.push({ id: 1, name: "John" });
// data.push({ id: 2, name: "Jane" });
// console.log(data); // [{ id: 1, name: "John" }, { id: 2, name: "Jane" }]

