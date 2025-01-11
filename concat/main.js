//! 1--> Example 
// let str1 = "Salam";
// let str2 = "Dünya";
// let result = str1.concat(", ", str2, "!");

// console.log(result); 
// // Çıxış: "Salam, Dünya!"
// console.log(str1); 
// // Çıxış: "Salam" (str1 dəyişməyib)





//! 2-->  Array-ləri birləşdirmək
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let result = arr1.concat(arr2);

// console.log(result); 
// // Çıxış: [1, 2, 3, 4, 5, 6]
// console.log(arr1); 
// // Çıxış: [1, 2, 3] (arr1 dəyişməyib)





//! 3--> Array ilə fərdi elementləri birləşdirmək
// let arr = [1, 2, 3];
// let result = arr.concat(4, 5);

// console.log(result);
// // Çıxış: [1, 2, 3, 4, 5]





//! 4--> Nesting (Qatlaşdırılmış array):
// let arr1 = [1, 2];
// let arr2 = [[3, 4]];
// let result = arr1.concat(arr2);

// console.log(result);
// // Çıxış: [1, 2, [3, 4]]

//? concat() qatlaşdırılmış array-ləri düzəltmir, onları olduğu kimi saxlayır.





//! 5--> String üçün alternativ: Stringləri birləşdirmək üçün + operatoru istifadə edilə bilər:
// let str1 = "Salam";
// let str2 = "Dünya";
// console.log(str1 + ", " + str2 + "!");
// // Çıxış: "Salam, Dünya!"





//! 6--> Array üçün alternativ: ...spread operatoru:
// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let result = [...arr1, ...arr2];
// console.log(result);
// // Çıxış: [1, 2, 3, 4]


