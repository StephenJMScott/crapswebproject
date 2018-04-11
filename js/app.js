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