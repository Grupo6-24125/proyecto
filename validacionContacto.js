const form = document.querySelector("#formulario");
console.log(form)
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const localidad = document.getElementById("localidad");
const telefono = document.getElementById("telefono");
const mail = document.getElementById("mail");
const donacion = document.getElementById("donacion")
const trabajar = document.getElementById("trabajar")

form.addEventListener("submit", function(event){
    event.preventDefault();
    if(nombre!=true && apellido!=true && localidad!=true && telefono!=true && mail!=true){
        alert("Completa todos los campos.")
    }
})
