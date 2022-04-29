//create a menu app
//use at least 1 array : list of movies
//make 2 classes : movie
//option to add and delete items 

//Menu
//1)Add movie, class 1(title, genre)
//What is the movie title? 
//What is the movie genre?

//2)Remove movie (splice)
//3)View list (view by title A-Z, genre)
//4) Exit with prompt "Happy watching!"

class Watch List {
    constructor(movieTitle, genre, leadingActor){
        this.movieTitle = movieTitle;
        this.genre = genre; 
        this.leadingActor = leadingActor; 
    }

    describe () {
        return `${this.movieTitle} is a ${this.genre}. The leading actor is ${this.leadingActor}.`
    }
}

class Genre {
    constructor(genre) {
        this.genre = genre;
    }
}

class Menu {
    constructor() {
        this.genre;
        this.movieTitle;
        this.leadingActor
    }

    start() {
        let selection = this.showMainMenu();

        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.addMovie();
                    break;
                case '2' :
                    this.searchByGenre();
                    break;
                case '3':
                    this.deleteMovie();
                    break;
                case'4':
                    this.viewMovieList();
                    break;
                default : 
                    selection = 0;
            }
            selection = this.showMainMenu();
        }
        alert('Happy Watching!');
    }

    showMainMenu() {
        return prompt (`
        0) Exit
        1) Add Movie
        2) Search by Genre
        3) Delete Movie
        4) View Watch List
        `);
    }

}