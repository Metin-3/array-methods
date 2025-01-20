# 1. Array.isArray() Metodunun İzahı
```Array.isArray()``` metodu JavaScript-də bir dəyişənin massiv (array) olub-olmadığını yoxlamaq üçün istifadə olunur. Bu metod ```true``` və ya ```false``` qaytarır. Bu, massivləri digər obyektlərdən və məlumat tiplərindən ayırmaq üçün ən dəqiq yoldur, çünki massivlər obyektlərin xüsusi bir alt növüdür.


# 2. Niyə Array.isArray() istifadə olunur?
JavaScript-də massivlər də daxil olmaqla hər şey obyektdir (```typeof array === 'object'```), buna görə sadəcə ```typeof``` ilə yoxlamaq kifayət deyil. Məsələn:

```js
const arr = [1, 2, 3];
console.log(typeof arr); // "object"
```
Beləliklə, ```typeof``` massiv ilə digər obyektlər arasında fərq qoymur. Burada ```Array.isArray()``` ən dəqiq yoxlama metodudur.


# 3. Array.isArray() xüsusiyyətləri
1. Yalnız massivləri müəyyən edir:
    * ```Array.isArray()``` yalnız massiv olan obyektlər üçün ```true``` qaytarır.
    * ```null```, ```obyektlər``` (```{}```), ```Set```, ```Map``` və digər verilənlər üçün ```false``` qaytarır.

2. ECMAScript Standartına Uyğun:
    * ```Array.isArray()``` ECMAScript 5 (ES5) standartında təqdim edilib, bu da onun köhnə brauzerlərdə olmaya biləcəyi anlamına gəlir. Köhnə brauzerlərdə polifil tətbiq etmək olar.

3. Prototiplərdən asılı deyil:
    * ```Array.isArray()``` prototiplərdən istifadə etmir. Bu da onu massivlərin yoxlanışı üçün ən etibarlı metod edir.

4. ```instanceof``` ilə müqayisə:
    * Bəzən ```instanceof Array``` istifadə olunur, amma bu metodun zəif nöqtəsi var: Əgər massiv fərqli JavaScript çərçivəsindən (məsələn, ```iframe```) yaradılıbsa, ```instanceof``` düzgün nəticə qaytarmaya bilər. ```Array.isArray()``` isə həmişə doğru nəticə verir.


### Sadə İstifadə Misalları
```js
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray('Hello'));  // false
console.log(Array.isArray({ key: 'value' })); // false
console.log(Array.isArray(null));    // false
console.log(Array.isArray(undefined)); // false
console.log(Array.isArray(new Array(3))); // true
```


### Digər Yoxlama Yolları ilə Müqayisə
1. instanceof ilə yoxlama:
```js
const arr = [1, 2, 3];
console.log(arr instanceof Array); // true
```
Bu metod sadə hallarda işləyir, amma çərçivələrarası massivlərdə (məsələn, iframe) uğursuz olur:

```js
const iframe = document.createElement('iframe');
document.body.appendChild(iframe);

const iframeArray = new iframe.contentWindow.Array();
console.log(iframeArray instanceof Array); // false
console.log(Array.isArray(iframeArray));   // true
```




# 5. Praktik Nümunələr
1. Funksiyaya Giriş Məlumatlarını Yoxlama:
Funksiya yalnız massiv qəbul edirsə:

```js
function processArray(data) {
  if (!Array.isArray(data)) {
    throw new TypeError('Gözlənilən: Array');
  }
  // Əsas əməliyyatlar
  console.log(data.map(item => item * 2)); // Massivdəki hər elementin 2 qatını hesablayır
}

processArray([1, 2, 3]); // [2, 4, 6]
processArray('Hello');   // Error: Gözlənilən: Array
```







2. Verilənlərin Tipini Ayırd Etmək:
Məlumatın massiv olub-olmadığını yoxlayaraq müxtəlif əməliyyatlar icra etmək:

```js
function handleData(input) {
  if (Array.isArray(input)) {
    console.log('Massiv işlənir:', input.length);
  } else {
    console.log('Massiv deyil:', input);
  }
}

handleData([1, 2, 3]); // Massiv işlənir: 3
handleData({ key: 'value' }); // Massiv deyil: [object Object]
handleData('Text'); // Massiv deyil: Text
```



3. JSON Məlumatlarını Yoxlama:
Serverdən gələn məlumat massiv və ya obyekt ola bilər. Onları ayırmaq üçün:
```js
const responseData = JSON.parse('{"data": [1, 2, 3]}');

if (Array.isArray(responseData.data)) {
  console.log('Bu bir massivdir:', responseData.data);
} else {
  console.log('Bu massiv deyil:', responseData.data);
}
```




# 6. Məsləhətlər

1. Reaktiv Proqramlaşdırmada istifadə:
React və ya Vue kimi çərçivələrdə massivlə işlədikdə, gələn props və ya state massiv olub-olmadığını yoxlayın. Əks halda, kodunuz səhv ata bilər.

2. Yoxlamanı Modulyar Et:
Böyük layihələrdə hər dəfə yoxlama əvəzinə, ümumi bir funksiya yaradaraq kodunuzu təmiz saxlayın:
```js
function isArray(input) {
  return Array.isArray(input);
}
```

3. Fərqli Massiv Tipləri:
TypedArray (məsələn, Int32Array) yoxlanarkən Array.isArray() həmişə false qaytarır. TypedArray üçün ayrıca yoxlama lazımdır:
```js
const intArray = new Int32Array(5);
console.log(Array.isArray(intArray)); // false
```



# 7. Son Nəticə 
1. Array.isArray() metodunu: 
* Digər yoxlama metodları ilə müqayisə etməyi,
* Praktik nümunələrdə necə istifadə ediləcəyini,
* Performans və dəqiqlik baxımından üstünlüklərini nəzərə almağı öyrəndiniz.



# 8. JavaScript-də TypedArray tipləri
JavaScript-də TypedArray tipləri (```Int32Array```, ```Uint8Array```, ```Float64Array``` və s.) ədədləri yaddaşda xüsusi bir şəkildə saxlayan massivlərdir. Onlar performansı artırmaq üçün nəzərdə tutulub və JavaScript-də "normal massivlərdən" fərqlənirlər. Bu fərqi anlamamız üçün bir neçə əsas məqamı izah edək:


### 1. Niyə Array.isArray() TypedArray üçün false qaytarır?
```Array.isArray()``` metodu yalnız normal massivlər (klassik Array obyektləri) üçün ```true``` qaytarır. ```TypedArray``` isə ```Array``` sinifindən miras almır və buna görə də ```Array.isArray()``` bu tipləri massiv kimi tanımır.
```js
const normalArray = [1, 2, 3];
const intArray = new Int32Array([1, 2, 3]);

console.log(Array.isArray(normalArray)); // true
console.log(Array.isArray(intArray));    // false
```
Burada intArray bir TypedArray olsa da, Array.isArray() onu massiv kimi tanımır.



### 2. TypedArray üçün Yoxlama
* a) instanceof ilə Yoxlama
TypedArray-lərin hər biri TypedArray prototipindən miras aldığı üçün instanceof operatoru ilə asanlıqla yoxlanıla bilər:

```js
const intArray = new Int32Array([1, 2, 3]);

console.log(intArray instanceof Int32Array); // true
console.log(intArray instanceof Uint8Array); // false
console.log(intArray instanceof Array);      // false
```


* b) ArrayBuffer.isView()
JavaScript-də bütün TypedArray tipləri ArrayBuffer obyektini istifadə edir. Bu obyektlər üzərində işləyən bir metoddur:

```js
const intArray = new Int32Array([1, 2, 3]);
const normalArray = [1, 2, 3];

console.log(ArrayBuffer.isView(intArray));  // true
console.log(ArrayBuffer.isView(normalArray)); // false
```


* c) Object.prototype.toString()
Bu üsul ilə obyektin hansı növ olduğunu dəqiqliklə yoxlaya bilərsiniz:

```js 
const intArray = new Int32Array([1, 2, 3]);

console.log(Object.prototype.toString.call(intArray)); // [object Int32Array]
```

### 3. TypedArray Nədir və Necə İşləyir?
* TypedArray tipləri JavaScript-də ədədləri birbaşa ədədi formatda saxlayır (məsələn, 32-bit integer, 64-bit float və s.). Bu tiplər performans optimizasiyası üçün istifadə olunur.
* TypedArray Tipləri:
1. Int8Array: 8-bit tam ədəd (signed)
2. Uint8Array: 8-bit tam ədəd (unsigned)
3. Int16Array: 16-bit tam ədəd (signed)
4. Uint16Array: 16-bit tam ədəd (unsigned)
5. Int32Array: 32-bit tam ədəd (signed)
6. Float32Array: 32-bit üzən nöqtəli ədəd
7. Float64Array: 64-bit üzən nöqtəli ədəd


* Misal: 
```js
const buffer = new ArrayBuffer(16); // 16 baytlıq bir yaddaş sahəsi
const intArray = new Int32Array(buffer);

intArray[0] = 42; // Yaddaşa 42 yazılır
console.log(intArray[0]); // 42
```



### 4. Nəticə
* Array.isArray() yalnız klassik massivlər üçün istifadə olunur, TypedArray tipləri üçün deyil.
  
* TypedArray tipləri üçün yoxlama metodları:
  1. instanceof
  2. ArrayBuffer.isView()
  3. Object.prototype.toString.call()

* TypedArray, yüksək performanslı, tip təhlükəsizliyi təmin edən və sabit ölçülü massivlərdir.
