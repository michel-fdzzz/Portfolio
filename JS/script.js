window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("abajo", window.scrollY > 0);
})

var nav = document.getElementById("nav");
var abrir = document.getElementById("abrir");
var cerrar = document.getElementById("cerrar");

abrir.addEventListener("click", function () {
    nav.classList.add("visible");
})


cerrar.addEventListener("click", function () {
    nav.classList.remove("visible");
})


var emailForm = document.getElementById("email");
var subjectForm = document.getElementById("subject");
var messageForm = document.getElementById("message");
var form = document.getElementById("contact-form");
//Para vaciar los parametros y lanzar el mensaje
form.addEventListener("submit", function (event) {
    if (emailForm.value && subjectForm.value && messageForm.value) {
        //Hacemos que se haga un poco mas tarde para que de tiempo a que el submit se haga
        setTimeout(function () {
            emailForm.value = '';
            subjectForm.value = '';
            messageForm.value = '';
            Swal.fire({
                title: "Correo enviado!",
                text: "Le responderé lo antes posible!",
                icon: "success",
                customClass: {
                    confirmButton: 'my-custom-button'
                }
            });
        }, 100)
    } else {
        event.preventDefault();
        Swal.fire({
            title: "Rellene todos campos",
            icon: "error",
            customClass: {
                confirmButton: 'my-custom-button'
            }
        });
    }
});

document.querySelector('.link-numero').addEventListener('click', () => {
    Swal.fire({
        text: "+34 685 82 76 50",
        icon: "info",
        customClass: {
            confirmButton: 'my-custom-button'
        }
    });
})