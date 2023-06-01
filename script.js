document.querySelector("button.button-menu-toggle")
      .addEventListener("click", function() {
             document.querySelector(".nav-links")
                        .classList.toggle("nav-links-responsive")} )
function showAlert() { alert('¡hola, esta es una alert desde javaScript!'); }
// encuentra al elemento html (el boton)mediante su id 
const miboton = document.getElementById('myboton');
//define la funcion que se ejecutara cuando se haga click en el boton
function handleclick(){
     alert('Hola! has hecho click en el boton!');
}
const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});
function validateEmail(email) {
     const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
     return regex.test(email)
   }
   function validateForm() {
     const emailInput = document.getElementById('email');
     const email = emailInput.value;
     if (!validateEmail(email)) {
       alert('Por favor ingrese un correo electrónico válido.');
     } else {
       alert('Correo electrónico enviado correctamente.');
     }
   }
   if (form){
    form.addEventListener ("submit", function(lala) {
    lala.preventDefault()
    validateForm();
  })}
  
  