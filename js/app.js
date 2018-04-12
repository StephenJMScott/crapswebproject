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
    
    //3. add the dice and display the score
    
    var score = die1 + die2;
    document.getElementById("messagedDisplayed").innerHTML = "You rolled a " + score + "!"  ;
    
});