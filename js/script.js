"use strict";
let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

let personMovieDB = {
    count: +numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let lastFilm = prompt("Один из последних фильмов?", "");
let rating = prompt("На сколько оцените его?", "");
let lastFilm1 = prompt("Один из последних фильмов?", "");
let rating1 = prompt("На сколько оцените его?", "");

personMovieDB.movies[lastFilm] = rating;
personMovieDB.movies[lastFilm1] = rating1;
console.log(personMovieDB);