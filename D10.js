/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

// const sum = 10 + 20;
// console.log("Esercizio A:", sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

// const random = Math.floor(Math.random() * 20);
// console.log("esercizio B:", random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

// const me = {
//   name: "Ilaria",
//   surname: "Rosati",
//   age: 30,
// };
// console.log("Esercizio C:", me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

// delete me.age;
// console.log("Esercizio D:", me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

// me.skills = ["CSS", "HTML", "JavaScript"];
// console.log("Esercizio E:", me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".

*/

// me.skills.push("Java");
// console.log("Esercizio F:", me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

// me.skills.pop();
// console.log("Esercizio G:", me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

// function dice() {
//   return Math.floor(Math.random() * 5) + 1;
// }

// console.log("Esercizio 1:", dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

// function whoIsBigger(a, b) {
//   if (a > b) {
//     return a;
//   }

//   return b;
// }

// console.log("Esercizio 2:", whoIsBigger(3, 7));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

// function splitMe(string) {
//   const stringa = string.split(" ");

//   return stringa.map((string) => {
//     let stringa2 = string.charAt(0).toUpperCase();
//     let stringa3 = string.slice(1).toLowerCase();
//     return stringa2 + stringa3;
//   });
// }

// console.log("Esercizio 3:", splitMe("Un giorno diventerò programmatore"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

// function deleteOne(a, b) {
//   if (true === true) {
//     return a.substring(1);
//   }
//   return a.substring(4);
// }

// console.log("Esercizio 4:", deleteOne("ciao", true));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

// function onlyLetters(a) {
//   let finale = "";

//   for (let i = 0; i < a.length; i++) {
//     if (isNaN(parseInt(a[i]))) {
//       finale += a[i];
//     }
//   }
//   return finale;
// }

// console.log("Esercizio 5:", onlyLetters("44 gatti in fila per 6 con il resto di 2"));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

// function isThisAnEmail(a) {
//   console.log(a.split(""));

//   if (a.includes("@") && a.includes(".")) {
//     return true;
//   }
//   return false;
// }

// console.log("Esercizio 6:", isThisAnEmail("ndhsnshrn@gmail.com"));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

// const data1 = new Date();

// function whatDayIsIt(a) {
//   return a;
// }

// console.log("Esercizio 7:", whatDayIsIt(data1));

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

// function rollTheDices(a) {
//   let sum = 0;
//   let values = [];
//   for (let i = 0; i < a; i++) {
//     let tiro = dice();
//     values.push(tiro);
//     sum += tiro;
//   }

//   return { sum: sum, values: values };
// }

// console.log("Esercizio 8:", rollTheDices(6));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

// const dataFutura = new Date(1, 6, 23);
// const dataOdierna = new Date();
// const dataArr = [];
// const data1 = dataFutura.getDate();
// const data2 = dataOdierna.getDate();

// function howManyDays(a, b) {
//   return a - b;
// }

// console.log("esercizio 9:", howManyDays(data1, data2));

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

// const aDate = new Date(2024, 6, 3);
// const bDate = new Date();
// function isTodayMyBirthday(a, b) {
//   if (a === b) {
//     return true;
//   }
//   return false;
// }

// console.log("Esercizio 10:", isTodayMyBirthday(aDate, bDate));

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

// const ObjEs11 = {
//   name: "Ginger",
//   animal: "Cat",
//   race: "european",
//   color: "orange",
//   hair: "short",
// };

// function deleteProp(a, b) {
//   if (a[b]) {
//     delete a[b];
//   }
//   return a;
// }

// console.log("Esercizio 11:", deleteProp(ObjEs11, "hair"));

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

// let annoNuovo = null;
// movies.forEach((film) => {
//   if (annoNuovo === null) {
//     annoNuovo = film.Year;
//   }
//   if (parseInt(annoNuovo) < parseInt(film.Year)) {
//     annoNuovo = film.Year;
//   }
// });

// let movie = movies.filter((x) => x.Year === annoNuovo);
// console.log("Esercizio 12:", movie);

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

// let counter = 0;

// movies.forEach((movie) => counter++);
// console.log("Esercizio 13:", counter);

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

// let filmArr = movies.map((movie) => movie.Year);

// console.log("Esercizio 14:", filmArr);

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

// let filmArr = [];
// let onlyInLastMillennium = movies.forEach((film) => {
//   if (filmArr === null) {
//     filmArr = film.Year;
//   }
//   if (parseInt(film.Year) < 2000) {
//     filmArr.push(film.Year);
//   }
// });

// console.log("Esercizio 15:", filmArr);

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

// let sumAllTheYears = movies.reduce((accumulator, currentValue) => {
//   return accumulator + parseInt(currentValue.Year);
// }, 0);

// console.log("Esercizio 16:", sumAllTheYears);

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

// const titolo = "The Lords of Salem";
// let searchByTitle = movies.find((film) => film.Title === titolo);

// console.log("Esercizio 17:", searchByTitle);

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

// const doubleObj = {
//   match: [],
//   unmatch: [],
// };

// function searchAndDivide(a) {
//   movies.forEach((film) => {
//     if (film.Title.includes(a)) {
//       doubleObj.match.push(film);
//       return doubleObj;
//     }

//     doubleObj.unmatch.push(film);
//   });
//   return doubleObj;
// }

// console.log("Esercizio 18:", searchAndDivide("Lord"));

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

// function removeIndex(a) {
//   let x = movies.splice(a, 1);
//   let y = movies.slice(0, a);
//   let z = movies.splice(a, movies.length);
//   let q = [...y, ...z];
//   return q;
// }

// console.log("Esercizio 19:", removeIndex(5));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

// let container = document.getElementById("container");

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

// const tdTag = document.getElementsByTagName("td");

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

// let tdClicle = function () {
//   let tds = document.querySelectorAll("td");
//   let stringa = "";
//   tds.forEach((td) => (stringa += td.innerText));
//   return stringa;
// };

// console.log("Esercizio 22:", tdClicle());

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

// let colorBgfunction = function () {
//   let domLink = document.getElementsByClass("link");
// };

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

// let NewElement = function () {
//   const ul1 = document.getElementById("myList");

//   let newLi = document.createElement("li");

//   newLi.innerText = "3";

//   ul1.appendChild(newLi);
//   return ul1;
// };

// console.log("Esercizio 24:", NewElement());

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

// let deleteFunction = () => {
//   let ul2 = document.getElementById("myList");

//   ul2.remove("li");
// };

deleteFunction();

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

// let funzione3 = function () {
//   let tr1 = document.querySelectorAll("tr");

//   tr1.forEach((element) => {
//     element.classList.add("test");
//   });
// };

// funzione3();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

/* Questo array viene usato per gli esercizi. Non modificarlo. */
