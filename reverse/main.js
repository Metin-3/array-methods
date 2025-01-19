//! 1 --> misal
// const numbers = [1, 2, 3, 4, 5];
// const reversedNumbers = numbers.reverse();

// console.log(reversedNumbers); // [5, 4, 3, 2, 1]
// console.log(numbers); // [5, 4, 3, 2, 1] (orijinal massiv dəyişdi)

//? Burada həm reversedNumbers, həm də numbers dəyişkənləri eyni massivi göstərir. Çünki reverse() mutasiya etdi.







//! 2 --> Orijinalı qorumaq istəyirsinizsə:
//! Bir nüsxə yaradın və reverse()-i onun üzərində tətbiq edin:

// const numbers = [1, 2, 3, 4, 5];
// const reversedNumbers = [...numbers].reverse();

// console.log(reversedNumbers); // [5, 4, 3, 2, 1]
// console.log(numbers); // [1, 2, 3, 4, 5] (orijinal massiv dəyişmədi)

//? Bu, orijinal massivdə hər hansı bir dəyişikliyin qarşısını alır.







//! 3--> String tərsinə çevirmək üçün reverse() istifadəsi:
//! reverse() yalnız massivlərdə işləyir, amma string-i tərsinə çevirmək üçün aşağıdakı üsuldan istifadə edə bilərik:

const str = "hello";
const reversedStr = str.split('').reverse().join('');

console.log(reversedStr); // "olleh"

//? split(''): String-i simvollardan ibarət massivə çevirir.
//? reverse(): Simvolların sırasını tərsinə çevirir.
//? join(''): Simvolları yenidən birləşdirib string yaradır.








//! 4--> Kompleks bir nümunə: Objektdən ibarət massivlə işləmək
//! Tutaq ki, bizdə istifadəçilər haqqında məlumat olan massiv var və tərsinə çevirmək istəyirik:


// const users = [
//   { id: 1, name: "Aysel" },
//   { id: 2, name: "Kamran" },
//   { id: 3, name: "Nigar" }
// ];

// const reversedUsers = [...users].reverse();

// console.log(reversedUsers);
// /*
// [
//   { id: 3, name: "Nigar" },
//   { id: 2, name: "Kamran" },
//   { id: 1, name: "Aysel" }
// ]
// */
// console.log(users); // Orijinal massiv dəyişmədi
