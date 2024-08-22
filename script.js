// Get the modal
var modal = document.getElementById("successModal");

// Get the button that opens the modal
var btn = document.getElementById("subscribeBtn");

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("closeBtn")[0];

// Get the email input field and the placeholder for the email in the modal
var emailInput = document.getElementById("emailInput");
var userEmail = document.getElementById("userEmail");
var modals = document.getElementById("modalnews");
var sub = document.getElementById("sub");
var mail = document.getElementById("email");
var check = document.getElementById("ail")
var cancel = document.getElementById("closeBtn").onclick = function(){
    modals.style.display = "none"
}
// When the user clicks the button, open the modal and display the email
btn.onclick = function() {
    var emailValue = emailInput.value;

    if(emailValue) {
        userEmail.textContent = emailValue;
        modal.style.display = "block";
    } else {
        alert("Please enter a valid email address.");
    }
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
    modal.style.opacity = "0";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
sub.onclick = function(){
if (mail.value!== "" && ail.checked) {
       modals.style.display = "none"
} else {
 alert("Input field can't be empty and accept the terms")   
}
}