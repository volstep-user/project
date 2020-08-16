"use strict";
let numberOfFilms = "";
while (!numberOfFilms || numberOfFilms.length > 50) {
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
}
let personMovieDB = {
    count: +numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
for (let i = 0; i < 2; i++) {
    let lastFilm = "";
    while (!lastFilm || lastFilm.length > 50) {
        lastFilm = prompt("Один из последних фильмов?", "");
    }
    let rating = "";

    while (!rating || rating.length > 50) {
        rating = prompt("На сколько оцените его?", "");
    }

    personMovieDB.movies[lastFilm] = rating;
}
console.log(personMovieDB);

if (personMovieDB.count <= 10) {
    alert("Malo");
} else if (personMovieDB.count > 10 && personMovieDB.count <= 30) {
    alert("Norm");
} else if (personMovieDB.count > 30) {
    alert("Super!");
} else {
    alert("error");
}