//! 1--> Sadə bir element əlavə etmək
// let fruits = ["apple", "banana"];
// fruits.unshift("orange");

// console.log(fruits); // ["orange", "apple", "banana"]
// console.log(fruits.length); // 3


//! 2--> Bir neçə element əlavə etmək
// let numbers = [3, 4, 5];
// numbers.unshift(1, 2);

// console.log(numbers); // [1, 2, 3, 4, 5]
// console.log(numbers.length); // 5


//! 3-->  Boş array-ə element əlavə etmək
// let emptyArray = [];
// emptyArray.unshift("first");

// console.log(emptyArray); // ["first"]
// console.log(emptyArray.length); // 1


//! 4--> Kompleks obyektləri əlavə etmək
// let users = [{ id: 2, name: "Alice" }, { id: 3, name: "Bob" }];
// users.unshift({ id: 1, name: "Eve" });

// console.log(users);
// // [
// //   { id: 1, name: "Eve" },
// //   { id: 2, name: "Alice" },
// //   { id: 3, name: "Bob" }
// // ]


//! 5--> unshift() istifadə edilən döngü
// let numbers = [];
// for (let i = 1; i <= 5; i++) {
//   numbers.unshift(i);
// }

// console.log(numbers); // [5, 4, 3, 2, 1]
