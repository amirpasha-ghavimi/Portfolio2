var contactbutton = document.querySelector(".contact-button");
var contact = document.querySelector(".contact") ;

contactbutton.addEventListener("click", function() {
    contact.classList.toggle("contact")
    if(contactbutton.textContent === "click for contact") {
        contactbutton.textContent = "click to close"
    }
    else {
        contactbutton.textContent = "click for contact"
    }
})