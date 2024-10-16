window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY > 0);
})

var nameForm = document.getElementById("name");
var emailForm = document.getElementById("email");
var subjectForm = document.getElementById("subject");
var messageForm = document.getElementById("message");
var form = document.getElementById("contact-form");
//Funciona
form.addEventListener("submit", function (event) {
    if (nameForm.value && emailForm.value && subjectForm.value && messageForm.value) {
        //Hacemos que se haga un poco mas tarde para que de tiempo a que el submit se haga
        setTimeout(function () {
            nameForm.value = '';
            emailForm.value = '';
            subjectForm.value = '';
            messageForm.value = '';
        }, 100)
    } else {
        event.preventDefault();
        alert("Por favor, rellena todos los campos");
    }
});                                                     