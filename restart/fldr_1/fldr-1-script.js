const numberOfFilms = prompt('How many films do you watch?')

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

for(let i = 1; i <= 2; i++) {
    const a = prompt('What movie did you see last time?')
    const b = prompt('Please rate the movie')
    personalMovieDB.movies[a] = b
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Done');
    } else {
        console.log('Error');
        i--;
    }
}

console.log(personalMovieDB.movies);