"use strict";

let personMovieDB = {
    count: "",
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        let numberOfFilms = "";
        while (!numberOfFilms || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
        this.count = numberOfFilms;
    },
    rememberFilm: function () {
        for (let i = 0; i < 2; i++) {
            let lastFilm = "";
            while (!lastFilm || lastFilm.length > 50) {
                lastFilm = prompt("Один из последних фильмов?", "");
            }
            let rating = "";

            while (!rating || rating.length > 50) {
                rating = prompt("На сколько оцените его?", "");
            }
            this.movies[lastFilm] = rating;
        }
    },
    detectPersonalLevel: function () {
        if (this.count <= 10) {
            alert("Malo");
        } else if (this.count > 10 && this.count <= 30) {
            alert("Norm");
        } else if (this.count > 30) {
            alert("Super!");
        } else {
            alert("error");
        }
    },
    showMyDB: function () {
        if (!this.privat) {
            console.log(this);
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 4; i++) {
            let genre = "";
            while (!genre) {
                genre = prompt(`Ваш любимый жанр под номером ${i}`);
            }
            this.genres[i - 1] = genre;
        }
        this.genres.forEach(function(value,index){
            console.log(`Любимый жанр ${index+1} - это ${value}`);
        });
    },
    toggleVisibleMyDB: function(){
        this.privat = !this.privat;
    }
};
