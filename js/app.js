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

//End of Modal JS//

/* JavaScript for Modal2 follows */

// Get the modal
var modal2 = document.getElementById('myModal2');

// Get the button elemement to launch 
var rulesbutton = document.getElementById("whatAreTheRules");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks on the "Set Up", open the modal 
rulesbutton.onclick = function() {
    modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
    modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

//end of modal2 js //


//JavaScript for rolling the dice

var die1, die2, die1DOM, die2DOM, score, phase, point;

die1 = 1;
die2 = 1;

die1DOM = document.getElementById("left-dice");
die2DOM = document.getElementById("right-dice");

phase = "comeout";

document.querySelector(".rollTheDice").addEventListener("click",function(){
    //1. get two random numbers
    die1 = Math.floor(Math.random()*6) + 1;
    die2 = Math.floor(Math.random()*6) + 1;
    
    //2. update dice image to reflect random number
    die1DOM.src = "css/assets/dice-" + die1 + ".png";
    die2DOM.src = "css/assets/dice-" + die2 + ".png";
    
    
    //3. add the dice and display the score, consider what phase of play we are in and if the roll is good or not
    score = die1 + die2;
    
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
            document.getElementById("messagedDisplayed").innerHTML  = point + " again!!! YOU WIN!!!";
            score = 0;
            phase = "comeout";
        } else {
            document.getElementById("messagedDisplayed").innerHTML  = "Roll again! Remember you want " + point;
            phase = "point"
        }
    }
});


//end of dice roll js //