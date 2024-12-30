//! 1-->  Əsas İstifadə
// const fruits = ["apple", "banana", "cherry"];
// const lastElement = fruits.pop();
// console.log(lastElement); // "cherry"
// console.log(fruits);      // ["apple", "banana"]


//! 2--> Tək Elementli Massiv
// const singleElementArray = ["apple"];
// const lastElement = singleElementArray.pop();
// console.log(lastElement); // "apple"
// console.log(singleElementArray); // []


//! 3-->  Boş Massiv
// const emptyArray = [];
// const lastElement = emptyArray.pop();
// console.log(lastElement); // undefined
// console.log(emptyArray);  // []


//! 4--> Rəqəm Massivində İstifadə
// const numbers = [1, 2, 3, 4, 5];
// const lastNumber = numbers.pop();
// console.log(lastNumber); // 5
// console.log(numbers);    // [1, 2, 3, 4]


//! 5--> Undefined Elementlər olan Massiv
// const mixedArray = [1, 2, undefined, 4];
// const lastElement = mixedArray.pop();
// console.log(lastElement); // 4
// console.log(mixedArray);  // [1, 2, undefined]

// const mixedArray2 = [1, 2, 4, undefined];
// const lastElement2 = mixedArray2.pop();
// console.log(lastElement2); // undefined
// console.log(mixedArray2);  // [1, 2, 4]






//!================================
//todo Praktik İstifadə Nümunələri:
//!================================


//! 1--> LIFO (Last In, First Out) Yaddaş İdarəsi. 
//! pop() metodu, "son daxil olan ilk çıxar" prinsipinə əsaslanan yığın strukturlarında istifadə olunur.
// const stack = [];
// stack.push(10);
// stack.push(20);
// stack.push(30);

// console.log(stack.pop()); // 30
// console.log(stack.pop()); // 20
// console.log(stack);       // [10]


//! 2--> Dinamik Datalarla İşləmə
//! Massivdən istifadə edərək dinamik olaraq elementləri əlavə edib silmək.
// const tasks = ["Task 1", "Task 2", "Task 3"];
// const completedTask = tasks.pop();
// console.log(`Completed: ${completedTask}`); // "Completed: Task 3"
// console.log(`Remaining tasks: ${tasks}`);  // "Remaining tasks: Task 1,Task 2"



//! 3-->  Elementlərin Əl ilə Təmizlənməsi
// const items = [10, 20, 30, 40];
// while (items.length > 0) {
//     console.log(`Removed: ${items.pop()}`);
// }
// console.log(items); // []
