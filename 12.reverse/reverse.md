# reverse() array metod

* reverse() JavaScript-də Array obyektinin bir metodudur və onun əsas məqsədi massivdəki elementlərin sırasını tərsinə çevirməkdir. Bu metod, orijinal massivə mutasiya tətbiq edərək (yəni orijinal massivi dəyişdirərək) yeni bir sıra yaradır. Bu, funksional proqramlaşdırmada "side effect" olaraq adlandırılır.

#  reverse() xüsusiyyətləri:
1. Mutasiya etməsi: reverse() orijinal massivi dəyişir və yeni bir massiv yaratmır. Bu, verilənlərinizin gözlənilməz şəkildə dəyişməsinə səbəb ola bilər, əgər ehtiyatlı davranmasanız.
2. Tərsinə çevrilmiş massivə istinad edir: reverse() dəyişdirilmiş (tərsinə çevrilmiş) orijinal massivi geri qaytarır.
3. Elementlər üzrə işləyir: reverse() massivdəki hər bir elementin fiziki mövqeyini dəyişir. Bu, massivdəki hər hansı digər obyektlərə təsir etməyəcək.
4. Boş massivlər və tək elementli massivlər üçün təhlükəsizdir: Bu halda heç bir dəyişiklik etməyəcək.
5. Reaktiv proqramlaşdırmada ehtiyatlılıq: Əgər massiv React state-dədirsə, birbaşa mutasiya edilməməlidir. Əvəzinə, slice() kimi metodlarla bir nüsxə yaradıb onun üzərində reverse() tətbiq edin.




### Sadə misal:
```js
const numbers = [1, 2, 3, 4, 5];
const reversedNumbers = numbers.reverse();

console.log(reversedNumbers); // [5, 4, 3, 2, 1]
console.log(numbers); // [5, 4, 3, 2, 1] (orijinal massiv dəyişdi)
```
Burada həm reversedNumbers, həm də numbers dəyişkənləri eyni massivi göstərir. Çünki reverse() mutasiya etdi.





### Orijinalı qorumaq istəyirsinizsə:
 Bir nüsxə yaradın və ```reverse()```-i onun üzərində tətbiq edin:
```js
const numbers = [1, 2, 3, 4, 5];
const reversedNumbers = [...numbers].reverse();

console.log(reversedNumbers); // [5, 4, 3, 2, 1]
console.log(numbers); // [1, 2, 3, 4, 5] (orijinal massiv dəyişmədi)
```
Bu, orijinal massivdə hər hansı bir dəyişikliyin qarşısını alır.






### String tərsinə çevirmək üçün reverse() istifadəsi:
```reverse()``` yalnız massivlərdə işləyir, amma string-i tərsinə çevirmək üçün aşağıdakı üsuldan istifadə edə bilərik:

```js
const str = "hello";
const reversedStr = str.split('').reverse().join('');

console.log(reversedStr); // "olleh"
```
1. ```split('')```: String-i simvollardan ibarət massivə çevirir.
2. ```reverse()```: Simvolların sırasını tərsinə çevirir.
3. ```join('')```: Simvolları yenidən birləşdirib string yaradır.






### React və ya funksional proqramlaşdırmada tətbiqi:
React-də state üzərində birbaşa mutasiya etmək yaxşı təcrübə deyil. Buna görə aşağıdakı kimi işləmək lazımdır:

```js
const [list, setList] = useState([1, 2, 3, 4, 5]);

const reverseList = () => {
  const reversed = [...list].reverse(); // Nüsxə yaradılır
  setList(reversed); // Yeni tərsinə çevrilmiş massiv set edilir
};

return (
  <div>
    <p>{list.join(', ')}</p>
    <button onClick={reverseList}>Tərsinə çevir</button>
  </div>
);
```





### Kompleks bir nümunə: Objektdən ibarət massivlə işləmək
Tutaq ki, bizdə istifadəçilər haqqında məlumat olan massiv var və tərsinə çevirmək istəyirik:

```js
const users = [
  { id: 1, name: "Aysel" },
  { id: 2, name: "Kamran" },
  { id: 3, name: "Nigar" }
];

const reversedUsers = [...users].reverse();

console.log(reversedUsers);
/*
[
  { id: 3, name: "Nigar" },
  { id: 2, name: "Kamran" },
  { id: 1, name: "Aysel" }
]
*/
console.log(users); // Orijinal massiv dəyişmədi
```


# Performance mülahizələri:
* Kiçik massivlər: reverse() çox sürətlidir və performans narahatlığı yaratmaz.
* Böyük massivlər: Massivin uzunluğu böyüdükcə reverse() daha çox yaddaş istifadəsinə və zaman xərclənməsinə səbəb ola bilər.

Senior bir yanaşma olaraq, həmişə massivlərin mutasiya olunması ilə bağlı ehtiyatlı davranmalı və məlumat axınına uyğun olaraq ehtiyat nüsxə yaratmalısınız. React və ya funksional proqramlaşdırma layihələrində bu daha da vacibdir.