// The Movie Database
// It’s like IMDB, but much much smaller!
// Create an JS object constructor to store the following information about your favorite movies: title (a string), duration (a number), and stars (an array of strings).
// Create 2 different instances of the object constructor
// Create a method that will return the movie information like so: “Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes.”

class Movie{
    constructor(title, duration, stars){
        this.title = title
        this.duration = duration
        this.stars = stars
    }
    sum(){
        return `Movie Title ${this.title}/nDuration: ${this.duration}/nStars: ${this.stars}`
    }
}

const myFavMovie = new Movie('The Joker',120 ,5)
const my2FavMovie = new Movie('The Batman',120,5)

console.log(myFavMovie.sum())
console.log(my2FavMovie.sum())