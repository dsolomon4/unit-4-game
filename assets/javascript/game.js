$(document).ready(function(){


    // create varibles for global items
    
    //The random number shown at the start of the game should be between 19 - 120.
    var guessNumber = Math.floor(Math.random() * 102) + 19;
    console.log(guessNumber)
    $("#guess").text(guessNumber) //connected to html
    
    
    // var keepnig count of the score and display
    var wins = 0;
    var loss = 0;
    var score = 0;
    $("#wins").text("You have " + wins + " wins.")
    $("#losses").text("You have " + loss + " losses.")
    
    // var for holding the score while adding, and score box
    var guessCounter = 0;
    $("#guess-counter").text(guessCounter)
    
    // varible array for images
    var stoneValue = ($("#stone").attr("stone-value"))
        stoneValue = parseInt(stoneValue);
    
    
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
    stoneNumber()
    /// connection of image to onclick 
    
   $(document).on('click', '.stone-image', function(){
      
        var stoneValue = $(this).attr('stone-value');
        score += parseInt(stoneValue);
        $('#guess-counter').text(score);
        console.log(score, "this is the score");
        console.log(guessNumber);
        
        if (guessNumber === score) {
            alert("You have won!")
            wins++
            resetGame()
        } else if (score > guessNumber) {
            alert("You have lost!")
            loss++
            
            resetGame()
        }
   });
    
    function resetGame() {
        $("#stone").empty();
        $('#guess-counter').text(0);
        $('#wins').text("wins : " + wins);
        $('#losses').text("Losses :" + loss);
        score = 0;
        guessNumber = Math.floor(Math.random() * 102) + 19;
        $("#guess").text(guessNumber)
        // stone.attr("stone-value", Math.floor(Math.random() * 12) + 1);
        stoneNumber()
        
    }
    })