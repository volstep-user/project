"use strict";

let numberOfFilms = "";

function start() {
    while (!numberOfFilms || isNaN(numberOfFilms)) {
        numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

let personMovieDB = {
    count: +numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberFilm() {
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
}
//rememberFilm();

function detectPersonalLevel() {
    if (personMovieDB.count <= 10) {
        alert("Malo");
    } else if (personMovieDB.count > 10 && personMovieDB.count <= 30) {
        alert("Norm");
    } else if (personMovieDB.count > 30) {
        alert("Super!");
    } else {
        alert("error");
    }
}
//detectPersonalLevel();

function showMyDB() {
    if (!personMovieDB.privat) {
        console.log(personMovieDB);
    }
}
showMyDB();

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personMovieDB.genres[i-1] = (genre);
    }
}
writeYourGenres();