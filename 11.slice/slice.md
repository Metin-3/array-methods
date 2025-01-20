# 1. JavaScript slice() Metodu

* ```slice()``` metodu JavaScript-də massivlər (və ya ```string``` obyektləri) üzərində istifadə olunur. Bu metod, mövcud massiv və ya ```stringdən``` müəyyən bir hissəni seçib, orijinal obyektə toxunmadan yeni bir massiv və ya sətir yaradır.

### Sintaksis:
```js
array.slice(start, end);
```

1. ```start``` (istəyə bağlıdır): Hissənin başlanğıc indeksini göstərir.
    * Əgər mənfi bir rəqəmdirsə, massivdə sondan başlayaraq sayılır.
    * Əgər göstərilməsə, ```start``` dəyəri avtomatik olaraq ```0``` qəbul edilir.

2. ```end``` (istəyə bağlıdır): Hissənin bitmə indeksini göstərir. ```end``` indeksi daxil edilmir (yəni ```end```-dən əvvəlki elementlər daxil edilir).
    * Əgər göstərilməsə, ```end``` dəyəri avtomatik olaraq massiv uzunluğuna (```array.length```) bərabər götürülür.
    * Mənfi rəqəm verilərsə, sondan başlayaraq sayılır.


### Xüsusiyyətlər:
1. Orijinal massiv dəyişdirilmir (immutability).
2. Yeni massiv və ya ```string``` qaytarır.
3. ```end``` həmişə ```exclusive``` (daxil edilmir).


# 2. Misallar
1. Sadə istifadə
``` js
const fruits = ["alma", "armud", "banan", "gilas", "nar"];
const slicedFruits = fruits.slice(1, 4);

console.log(slicedFruits); // ["armud", "banan", "gilas"]
console.log(fruits); // ["alma", "armud", "banan", "gilas", "nar"] (dəyişməz)
```
* ```start = 1```: "armud" indeksindən başlayır.
* ```end = 4```: "nar" daxil edilmədən dayanır.


2. ```start``` və ```end``` parametrlərini atlamaq
```js
const numbers = [10, 20, 30, 40, 50];

// Bütün elementləri kopyalamaq
const copy = numbers.slice();
console.log(copy); // [10, 20, 30, 40, 50]
```

* Parametrsiz istifadə edildikdə, massiv tam olaraq kopyalanır.


3. Mənfi indekslər
```js
const letters = ["a", "b", "c", "d", "e", "f"];
const slicedLetters = letters.slice(-4, -1);

console.log(slicedLetters); // ["c", "d", "e"]
```
* ```start = -4```: Sondan 4-cü elementdən başlayır ("c").
* ```end = -1```: Sondan 1-ci elementə qədər ("f" daxil edilmir).


4. Təkcə başlanğıc indeksini təyin etmək
```js
const colors = ["qırmızı", "yaşıl", "mavi", "sarı", "qara"];
const fromIndex2 = colors.slice(2);

console.log(fromIndex2); // ["mavi", "sarı", "qara"]
```
* ```start = 2```: "mavi"dən başlayır və sona qədər seçir.



5. slice() ilə sətirlərin işlənməsi
```js
const text = "Hello, World!";
const partOfText = text.slice(7, 12);

console.log(partOfText); // "World"
```



# 3. Nümunələr – Praktik İstifadə

1. Ən son elementləri almaq
```js
const array = [1, 2, 3, 4, 5];
const lastTwo = array.slice(-2);

console.log(lastTwo); // [4, 5]
```

2. Dəyişiklik etmədən orijinal məlumat üzərində işləmək
```js
const names = ["Ayxan", "Günel", "Nihad", "Elvin"];
const selectedNames = names.slice(1, 3);

console.log(selectedNames); // ["Günel", "Nihad"]
console.log(names); // ["Ayxan", "Günel", "Nihad", "Elvin"] (orijinal dəyişməz qalır)
```


# slice() vs splice()
* ```slice()```: Orijinal massivi dəyişdirmir. Yalnız yeni bir massiv yaradır.

* ```splice()```: Orijinal massivi dəyişdirir və silinmiş elementləri qaytarır.

```js
const arr = [1, 2, 3, 4, 5];
const sliced = arr.slice(1, 3); // [2, 3]
const spliced = arr.splice(1, 3); // [2, 3, 4]

console.log(arr); // [1, 5] (splice massivi dəyişdirdi)
```


# Yekun slice() metodu:

1. Massivlərdən və stringlərdən hissə götürmək üçün daha təhlükəsiz və çevik bir üsuldur.

2. Orijinal məlumat toxunulmaz qalır.

3. Müxtəlif praktiki hallarda istifadə edilə bilər: massivləri kopyalamaq, xüsusi hissələri seçmək, mənfi indekslərlə arxadan hissələri çıxarmaq.

