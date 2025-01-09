//! 1-->  Obyektdə Xüsusiyyətin Silinməsi
// let user = {
//     name: "Alice",
//     age: 30,
//     job: "Developer"
// };

// console.log(user); 
// // { name: "Alice", age: 30, job: "Developer" }

// delete user.age;

// console.log(user); 
// // { name: "Alice", job: "Developer" }

//? age xüsusiyyəti delete ilə obyektin tərkibindən tamamilə çıxarıldı.
//? user obyekti dəyişdirildi və age artıq mövcud deyil.




//! 2--> Massivdə Elementin Silinməsi
// let numbers = [10, 20, 30, 40];

// delete numbers[1];

// console.log(numbers); 
// // [10, undefined, 30, 40]
// console.log(numbers.length); 
// // 4

//? delete numbers[1] yalnız həmin elementi silir, lakin massivin uzunluğunu dəyişmir.
//? İndeks 1-dəki dəyər undefined olur. Bu səbəbdən massivdə boşluq qalır.




//! 3--> Prototipdəki Xüsusiyyətlərə Təsiri
// function Person(name) {
//     this.name = name;
// }
// Person.prototype.age = 25;

// let john = new Person("John");

// delete john.age;

// console.log(john.age); 
// // 25 (Prototipdə qaldığı üçün)

//? age prototipdə olduğu üçün delete ilə silinmədi.
//? delete yalnız obyektin öz xüsusiyyətlərinə təsir edir.




//! 4-->  Xüsusiyyət Silinməyən Hal
// const user = Object.freeze({
//     name: "Alice",
// });

// delete user.name;

// console.log(user.name); 
// // "Alice"

//? Object.freeze() obyekti dəyişdirilməz edir. Buna görə delete uğursuz olur.
//? delete ilə silmək mümkün olmayan xüsusiyyətlər üçün false qaytarılır.




//! 5--> delete və undefined fərqi
// let obj = { name: "John" };

// delete obj.name;
// console.log(obj.name); 
// // undefined

// obj.name = undefined;
// console.log(obj.name); 
// // undefined

//? Bir xüsusiyyət delete ilə silindiyi zaman tamamilə mövcud olmur.
//? Əgər undefined qiyməti təyin edilərsə, xüsusiyyət mövcud olur, lakin dəyəri undefined olur.



//! 6--> Obyektin Xüsusiyyətinin Mövcudluğunu Yoxlamaq
// let user = { name: "Alice" };

// delete user.name;

// console.log("name" in user);
// // false

//? delete əməliyyatından sonra obyektin name xüsusiyyəti tamamilə silinir.
//? in operatoru xüsusiyyətin mövcud olub-olmadığını yoxlayır.




//! 7-->  Massivdə Element Silmək üçün splice Alternativi
// let numbers = [10, 20, 30, 40];

// numbers.splice(1, 1); // 1-ci indeksdən 1 element sil

// console.log(numbers); 
// // [10, 30, 40]

//? Niyə splice daha məqsədəuyğundur?
//? splice həm elementi silir, həm də digər elementləri irəli çəkir.
//? delete ilə müqayisədə, boşluq yaratmır.









//!===================================
//! PRAKTIKI
//!===================================

//! 1--> API-dən gələn məlumatlarda həssas məlumatları silmək:
let apiResponse = {
    userId: 123,
    token: "abc123",
    data: { name: "John", age: 30 }
};

delete apiResponse.token;

console.log(apiResponse); 
// { userId: 123, data: { name: "John", age: 30 } }
