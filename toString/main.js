//! Standart davranış izahı
//? İstifadəçi obyektə öz toString() metodunu əlavə edərək, obyektin mətn təqdimatını fərdiləşdirə bilər.

// const car1 = {
//     brand: "Tesla",
//     model: "Model S",
//     toString() {
//       return `Car: ${this.brand} ${this.model}`;
//     }
//   };

//   console.log(car1.toString()); // Car: Tesla Model 


//? Əgər belə bir metod əlavə edilməsəydi, standart toString() çağırılardı:

// const car2 = {
//     brand: "Tesla",
//     model: "Model S"
//   };

// console.log(car2.toString()); // [object Object]


//todo------------------------------------------------------------

//! Primitive Tiplərdə toString()

//todo------------------------------------------------------------
//!========================================================================
//! 1--> Stringlərdə toString() metodunu çağırmaq birbaşa stringi qaytarır.
// let text = "Hello, World!";
// console.log(text.toString()); // "Hello, World!"



//!=================================================================================
//! 2--> Number tipləri üçün toString() metodu, dəyəri stringə çevirir. Bu metodda opsional olaraq əsas (radix) göstərilə bilər.

//? toString() metodu ədədi fərqli ədədi sistemlərdə təmsil etmək üçün radix parametrini qəbul edir.
//? radix 2 ilə 36 arasında bir rəqəm ola bilər və bu, ədədin hansı əsasda göstəriləcəyini müəyyən edir.

// let num = 123;
// console.log(num.toString());       // "123" 
// console.log(num.toString(2));      // "1111011" (İkilik əsasda)
// console.log(num.toString(16));     // "7b" (Onaltılıq əsasda)
// console.log(num.toString(49));     // main.js:46 Uncaught RangeError: toString() radix argument must be between 2 and 36







//!=====================================================================================
//! 3--> Boolean tipləri üçün toString() metodu true və ya false dəyərini stringə çevirir. 

// let bool = true;
// console.log(bool.toString()); // "true"

// let boolFalse = false;
// console.log(boolFalse.toString()); // "false"

//? Məsələn, bir məntiqi ifadəni stringə çevirmək:
// const isVisible = 5 > 3; // true
// console.log(isVisible.toString()); // "true"


//? toString() metodunun qısayol alternativi: Əgər Boolean dəyəri bir stringlə birləşdirilirsə, JavaScript avtomatik olaraq onu string formatına çevirir:

// const isAvailable = true;
// console.log("Availability: " + isAvailable.toString());  // Nəticə: "Availability: true"
// console.log("Availability: " + isAvailable); // "Availability: true"


//? toString()-in Type Conversion (Tip Çevirisi) ilə fərqi: toString() xüsusi olaraq Boolean dəyərinin stringə çevrilməsini təmin edir. Əgər Boolean birbaşa stringə çevrilmək üçün istifadə edilərsə, eyni nəticə alınar:

// const boolValue = false;

//? `toString()` istifadə:
// console.log(boolValue.toString()); // "false"

//? Type conversion (String boolValue):
// console.log(String(boolValue)); // "false"








//!================================================================================
//! 4--> Array-lərdə toString() bütün elementləri vergüllə ayrılmış stringə çevirir. Massivin məzmununu string formatında göstərmək və ya başqa sistemlərə (məsələn, fayllara və ya digər interfeyslərə) göndərmək üçün istifadə olunur.
// let arr = [1, 2, 3, 4];
// console.log(arr.toString()); // "1,2,3,4"

// let arr2 = ["Apple", "Banana"];
// console.log(arr2.toString()); // "Apple,Banana"

// const emptyArr = [];
// console.log(emptyArr.toString()); // ""



//? Əgər massivdəki bir element artıq String formatındadırsa, olduğu kimi götürülür.
//? Əgər element başqa bir tipdədirsə (məsələn, Number, Boolean, və s.), həmin elementin toString() metodu çağırılır.

// const arr3 = [true, false, 42, "Hello"];
// console.log(arr3.toString()); // "true,false,42,Hello"

//? Əgər massivdə digər massivlər varsa, daxili massivlər də stringə çevrilir və vergüllə ayrılmış şəkildə birləşdirilir.
//? İzah: Daxili massiv [2, 3] stringə çevrilərək "2,3" olur və əsas massivin bir hissəsi kimi birləşdirilir.
// const nestedArr = [1, [2, 3], 4];
// console.log(nestedArr.toString()); // "1,2,3,4"



//? Əgər massivdə boş elementlər varsa (məsələn, undefined və ya boş yerlər), onlar stringdə boş bir yer kimi göstərilir.
// const arr4 = [1, , 3];
// console.log(arr4.toString()); // "1,,3"

//? Əgər massivdə obyektlər varsa, obyektlərin toString() metodu çağırılır. Standart obyektlər üçün bu nəticə [object Object] olacaq.
// const arr5 = [1, { name: "Alice" }, 3];
// console.log(arr5.toString()); // "1,[object Object],3"

//? toString() ilə join() arasındakı fərq:
//? toString() həmişə vergül istifadə edir.
//? join() isə separator (ayırıcı) təyin etməyə imkan verir.
// const arr6 = [1, 2, 3];
// console.log(arr6.toString()); // "1,2,3"
// console.log(arr6.join(" - ")); // "1 - 2 - 3"







//!==========================================================================================
//! 5--> null və undefined tiplərinin toString() metodu yoxdur. Əgər bu tiplərə birbaşa toString() metodunu tətbiq etməyə çalışsanız, TypeError adlı bir səhv yaranacaq. Lakin String() funksiyası ilə stringə çevirmək mümkündür.
//? Niyə toString() metodu yoxdur?
//? toString() metodu adətən obyektlərə və bəzi digər tiplərə məxsusdur. null və undefined isə "primitiv tiplər"dir və standart olaraq bu metodla təmin olunmayıblar.
//? Bu, onların minimal davranışını qorumaq və daha çox obyektlər üçün nəzərdə tutulmuş metodlardan uzaq saxlamaq üçün edilib.

// let val = null;
// console.log(String(val)); // "null"

// let undef = undefined;
// console.log(String(undef)); // "undefined"

//? Əgər null və ya undefined üzərində birbaşa toString() metodunu çağırsanız, aşağıdakı kimi bir səhv yaranacaq:
// null.toString();       // TypeError: Cannot read properties of null
// undefined.toString();  // TypeError: Cannot read properties of undefined

//? Əgər null və undefined tiplərini stringə çevirmək istəyirsinizsə, JavaScript-də qlobal String() funksiyasını istifadə edə bilərsiniz. Bu metod toString()-dən fərqli olaraq təhlükəsizdir və hər hansı səhv yaratmır.
// console.log(String(null));       // "null"
// console.log(String(undefined));  // "undefined"

//? String() funksiyası ilə toString()-in fərqi:

//? toString():
//todo Obyektlər və bəzi tiplər üçün istifadə olunur.
//todo null və undefined üçün mövcud deyil və birbaşa çağırıldıqda səhv yaradır.

//? String():
//todo JavaScript-də bütün tiplər üçün mövcuddur (primitivlər daxil olmaqla).
//todo null və undefined üçün də uyğun string dəyər qaytarır.








//todo------------------------------------------------------------

//! Obyektlərdə  toString()

//todo------------------------------------------------------------

//! Obyektlərdə standart toString() metodu obyektin növünü qaytarır.
// let obj = {};
// console.log(obj.toString()); // "[object Object]"

//? Obyektlər üçün xüsusi toString() metodunun təyin edilməsi:
// let person = {
//     name: "Ali",
//     age: 25,
//     toString: function () {
//       return `Name: ${this.name}, Age: ${this.age}`;
//     }
//   };

//   console.log(person.toString()); // "Name: Ali, Age: 25"


//? Fərqli növ obyektlər:
//? Object.prototype.toString() obyektin daxili növünü müəyyən etmək üçün faydalıdır. Əgər bir obyektin növünü dəqiq müəyyən etmək istəyirsinizsə, Object.prototype.toString.call(obj) sintaksisindən istifadə edin. Bu metod hər hansı obyekt üçün onun daxili növünü qaytarır.
//? Məsələn, massivlər və tarixlər də obyektlərdir, amma onların növünü fərqləndirmək üçün bu metod istifadə olunur.


// console.log(Object.prototype.toString.call([]));       // "[object Array]"
// console.log(Object.prototype.toString.call(new Date())); // "[object Date]"
// console.log(Object.prototype.toString.call(/abc/));    // "[object RegExp]"
// console.log(Object.prototype.toString.call(null));     // "[object Null]"
// console.log(Object.prototype.toString.call(undefined)); // "[object Undefined]"
// console.log(Object.prototype.toString.call(123));      // "[object Number]"

//? ve ya

// function getType(obj) {
//     return Object.prototype.toString.call(obj);
// }

// console.log(getType({}));          // "[object Object]"
// console.log(getType([]));          // "[object Array]"
// console.log(getType(new Date()));  // "[object Date]"
// console.log(getType(null));        // "[object Null]"
// console.log(getType(undefined));   // "[object Undefined]"
// console.log(getType(42));          // "[object Number]"
// console.log(getType("Hello"));     // "[object String]"

//? Əgər yalnız standart metodu istifadə etsəniz, fərqli növ obyektləri fərqləndirmək çətin ola bilər. Məsələn:
// const obj1 = {};
// const obj2 = [];
// console.log(obj1.toString()); // "[object Object]"
// console.log(obj2.toString()); // ""







//todo------------------------------------------------------------

//! Date Tiplərində toString()

//todo------------------------------------------------------------

//! Date obyektində toString() tarix və vaxtı oxunaqlı formatda qaytarır.
// let now = new Date();
// console.log(now.toString()); // Məsələn: "Sun Dec 29 2024 12:45:30 GMT+0400 (Azerbaijan Standard Time)"
