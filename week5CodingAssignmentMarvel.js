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


class Movie{
    constructor(title, genre){
        this.title = title;
        this.genre = genre;
    }
}

class Menu {
    constructor() {
        this.watchList = [];
        this.selectedMenu = null;
    }

    start() {
        let selection = this.showMainMenu();

        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createWatchList();
                    break;
                case '2' :
                    this.deleteMovie();
                    break;
                case '3':
                    this.viewList();
                    break;
                default : 
                    selection = 0;
            }
            selection = this.showMainMenu();
        }
        //THIS WORKS! When I press 0, it says the alert
        alert('Happy Watching!');
    }

    showMainMenu() {
        return prompt (`Choose from the following list:
        0) Exit
        1) Create Watch List
        2) Delete Movie From List
        3) View List
        `);
    }

    createWatchList() {
        let movieName = prompt('Enter the movie you would like to add.');
        let movieGenre = prompt('Enter the movie genre.');
        this.watchList.push(new Movie(movieName, movieGenre));
    }
    
    deleteMovie() {
        let index = prompt('Type the index of the movie you want to delete.');
        this.watchList.splice(index, 1);
    }
    viewList() {
        //nothing pops up here, I think it's because there is no array.
        let movieList = '';
        for (let i=0; i<this.watchList.length; i++) {
            let movieDescription = `Title: ${this.watchList[i].title}, Genre: ${this.watchList[i].genre} \n`;
            if (i == 0) {
                movieList = movieDescription
            } else {
            movieList = movieList + movieDescription;
            }
        }
        return prompt (`This is your Watch List:\n${movieList}`)
    }
}

let menu = new Menu();
menu.start();
