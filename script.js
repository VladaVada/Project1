"use strict";

let numberOfFilms;

do {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
} while (numberOfFilms == null || numberOfFilms.trim() == '' || numberOfFilms.length >= 50);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

for(let i = 0; i < 2; i++){

    let a;
    do {
        a = prompt('Один из последних просмотренных фильмов', '');
    } while ( a == null || a.trim() == '' || a.length >= 50);
    
    let b;
    do {
        b = prompt('На сколько оцените его', '');
    } while ( b == null || b.trim() == '' || b.length >= 50);

     personalMovieDB.movies[a] = b;
}

 if(personalMovieDB.count >= 0 && personalMovieDB.count < 10){
    alert('Просмотренно довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30)  {
    alert('Вы классический зритель');
}else if (personalMovieDB.count > 30){
    alert('Вы киноман');
} else if(personalMovieDB.count !== 'number'){
    alert('Произошла ошибка');}

console.log(personalMovieDB);

// const hamburger = 5;
// const fries = null;

// if (hamburger && fries){
//     console.log('Я сыт!');
// }

// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'dfgdgfg');

// if (hamburger === 3 && cola === 1 && fries){
//     console.log('Все сыты!');
// } else {
// console.log('Мы уходим!');
// }

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if (hamburger === 3 && cola ===2 || fries === 3 && nuggets){
//     console.log('Все довольны!');
// } else {
// console.log('Мы уходим!');
// }

// console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);


// for (let i = 0; i < 3; i++ ) {
//     console.log(i);
//     for (let j = 0; j < 3; j++ ) {
//         console.log(j);
//     }
// }

// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++){

//     for( let j = 0; j < i; j++) {
// result += "*";
//   }
//     result += '\n';
// }


// console.log(result);

// first: for (let i = 0; i < 3; i++ ) {
//     console.log(`First level: ${i} `);
//     for (let j = 0; j < 3; j++ ) {
//         console.log(`Second level: ${j} `);
//       for (let k = 0; k < 5; k++ ) {
//         if (k === 2 ) break first;
//         console.log(`Third level: ${k} `);
//       }
//     }
// }

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }
// for(let i = 20; i >= 10; i--){
//     console.log(i);
//     if (i === 14) break;
// }
// function firstTask() {
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     for (let i = 0; i < arr.length; i++) {
//         result[i] = arr[i];
//     }

//     console.log(result);
//     return result;
// }
// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];
// for(let i = 0; i < arr.length; i++){
//     result[i] = arr[i];
// }
//  console.log(result);

//  function secondTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];

//     // Пишем решение вот тут
//     for(let i = 0; i < data.length; i++){
//         let currentEl = data[i];
//         if (typeof currentEl === 'number') {
//             data[i] = currentEl * 2;
//             continue;
//         }
//         data[i] = currentEl + ' - done';
//     }
//     console.log(data);
    
//     // Не трогаем
//     return data;
// }
// const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     // Пишем решение вот тут
//     let j = 0;
//     for(let i = data.length - 1; i >= 0; i-- ){
//         result[j] = data[i];
//         j++;
//     }
    
//     console.log(result);

//     const lines = 6;
//     let result = '';
//     let amountStars = 1;
//     // Проверяется именно переменная result, формируйте строку в ней
//     for(let i = 1; i <= lines; i++){
//         for(let j = 0; j <= lines - i; j++){
//             result += ' ';
//         }
//         for (let k = 0; k < amountStars; k++){
//         result += "*";
//         }
//         result += '\n';
//         amountStars += 2;
//     }
//     console.log(result);