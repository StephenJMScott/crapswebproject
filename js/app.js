/* JavaScript for Modal follows */

// Get the modal
var modal = document.getElementById('myModal');

// Get the p elemement to launch 
var pTag = document.getElementById("modalLaunch");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the "Set Up", open the modal 
pTag.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


//JavaScript for rolling the dice


document.querySelector(".rollTheDice").addEventListener("click",function(){
    
    //1. get two random numbers
    var die1 = Math.floor(Math.random()*6) + 1;
    var die2 = Math.floor(Math.random()*6) + 1;
    
    //2. update dice image to reflect random number
    
    var die1DOM = document.getElementById("left-dice");
    die1DOM.src = "css/assets/dice-" + die1 + ".png";
    
    var die2DOM = document.getElementById("right-dice");
    die2DOM.src = "css/assets/dice-" + die2 + ".png";
    
    //3. add the dice and display the score, consider what phase of play we are in and if the roll is good or no
    
    var score = die1 + die2;
    var phase = "comeout";
    var point;
    
    if (phase == "comeout"){
        if (score == 2){
            document.getElementById("messagedDisplayed").innerHTML = "Snake Eyes! You lose"  ;
            score = 0;
            phase = "comeout";
        } else if (score == 3|| score == 12){
            document.getElementById("messagedDisplayed").innerHTML  = "You crapped out! You lose";
            score = 0;
            phase = "comeout";
        } else if ( score == 7 || score == 11){
            document.getElementById("messagedDisplayed").innerHTML = "YOU WIN!!!";
            score = 0;
            phase = "comeout";
        } else {
            phase = "point";
            point = score;
            document.getElementById("messagedDisplayed").innerHTML = "Roll again, point set at " + score + ". Roll the same again to win";
        }
    } else{
        //point phase //
        if (score == 2 || score == 3 || score == 12 || score == 7) {
            document.getElementById("messagedDisplayed").innerHTML  = "You crapped out! You lose";
            score = 0;
            phase = "comeout";
        } else if (score == point) {
            document.getElementById("messagedDisplayed").innerHTML  = score + " again!!! YOU WIN!!!";
            score = 0;
            phase = "comeout";
        } else {
            document.getElementById("messagedDisplayed").innerHTML  = "Roll again! Remember you want " + score;
            phase = "point"
            
        }
            
    }
   
   
   
    
});