$(document).ready(function(){

// randomNumber being guessed needs to be display

// when correct number is guessed, win goes up by one point
// when incorrect number is guessed, lose goes up by one point
// the rules need to be diplayed
// the number being added needs to be displayed




// * Your game will hide this amount until the player clicks a crystal.
//   * When they do click one, update the player's score counter.


//* The player loses if their score goes above the random number.

//* The game restarts whenever the player wins or loses.

//* When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

//
// * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.


// create varibles for global items

 //random value of the stone
 /*
var blueStoneValue = Math.floor(Math.random() * 12) + 1;
var greenStoneValue = Math.floor(Math.random() * 12) + 1;
var purpleStoneValue = Math.floor(Math.random() * 12) + 1;
var redStoneValue = Math.floor(Math.random() * 12) + 1;
console.log(blueStoneValue)
console.log(greenStoneValue)
console.log(purpleStoneValue)
console.log(redStoneValue)
*/

//The random number shown at the start of the game should be between 19 - 120.
var guessNumber = Math.floor(Math.random() * 102) + 19;
console.log(guessNumber)
$("#guess").text("This is your random number: " + guessNumber) //connected to html


// var keepnig count of the score and display
var wins = 0;
var loss = 0;
$("#wins").text("you have " + wins + " wins.")
$("#losses").text("you have " + loss + " losses.")

// var for holding the score while adding, and score box
var guessCounter = 0;
$("#guess-counter").text("Your score: " + guessCounter)

// varible array for images


var images = ["assets/images/blue-stone.jpg", "assets/images/green-stone.jpg", "assets/images/purple-stone.jpg", "assets/images/red-stone.jpg", ]

function stoneNumber(){

     //looping thru image array and attaching value to images
    for (var i = 0; i < images.length; i++) {
        var stone = $('<img>');
        stone.addClass("stone-image");
        stone.attr("src", images[i]);
        stone.attr("stonevalue", Math.floor(Math.random() * 12) + 1);
        
        $("#stone").append(stone);
     
     
    }
    
    var stoneValue = ($(this).attr("stonevalue"))
        stoneValue = parseInt(stoneValue);
    
}



// var for the numbers that will be used to add







// * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
/// connection of image to onclick 

$("#stone").on('click', function () {
    winner()

    })

/**$("#green-stone").on('click', function () {

    
})

$("#purple-stone").on('click', function () {

})

$("#red-stone").on('click', function () {
  
})

*/


function resetGame() {
    wins = 0;
    loss = 0;
    
}



//* The player wins if their total score matches the random number from the beginning of the game.

function winner() {
    guessCounter = 0;

    guessCounter = 1 +3 //= stoneValue 

    $("#guess-counter").text("Your score: " + guessCounter)
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
    }


}

resetGame()


stoneNumber()
})