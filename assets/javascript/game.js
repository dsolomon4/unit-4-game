$(document).ready(function(){


// create varibles for global items

//The random number shown at the start of the game should be between 19 - 120.
var guessNumber = Math.floor(Math.random() * 102) + 19;
console.log(guessNumber)
$("#guess").text(guessNumber) //connected to html


// var keepnig count of the score and display
var wins = 0;
var loss = 0;
$("#wins").text("You have " + wins + " wins.")
$("#losses").text("You have " + loss + " losses.")

// var for holding the score while adding, and score box
var guessCounter = 0;
$("#guess-counter").text(guessCounter)

// varible array for images
var stoneValue = ($("#stone").attr("stone-value"))
    stoneValue = parseInt(stoneValue);
    console.log(stoneValue)


var images = ["assets/images/rock-crystal-397955_1920.jpg", "assets/images/crystal-2723145_1920.jpg", "assets/images/amethyst-265347_1920.jpg", "assets/images/gem-3373541_1920.jpg", ]

function stoneNumber(){

     //looping thru image array and attaching value to images
    for (var i = 0; i < images.length; i++) {
        var stone = $('<img>');
        stone.addClass("stone-image");
        stone.attr("src", images[i]);
        
        stone.attr("stone-value", Math.floor(Math.random() * 12) + 1);
        $("#stone").append(stone);
     
     
    }
    

    
}

/// connection of image to onclick 

$("#stone").on('click', function () {
    winner()

    })

function resetGame() {
    wins = 0;
    loss = 0;
    
}

//* The player wins if their total score matches the random number from the beginning of the game.

function winner() {
    guessCounter = 0;

    //value of the stone
    var stoneValue = ($("#stone").attr("stone-value"))
    stoneValue = parseInt(stoneValue);
    console.log(stoneValue)

    //When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
    guessCounter += stoneValue 

    $("#guess-counter").text(guessCounter)
    //if the numbers added is less than guessNumber, continue to add
    // when correct number is guessed, show message "You win!"
    //when incorrect number is guessed, show message "You lose!"
    if (guessNumber === guessCounter) {
        alert("You have won!")
        wins++
        resetGame()
    } else if (guessNumber > guessCounter) {
        //alert("You have lost!")
        loss++
        resetGame()
    }
//The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
}

resetGame()

stoneNumber()
})