const api_url = "https://cleargroup-landingpage-api.herokuapp.com/api/";
const formulario = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');
const boton = document.getElementById("contact-form-submit");
const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};
const campos = {
  name: false,
  lastname: false,
  email: false
};
const validationForm = (i) =>{
  switch(i.target.name){
    case'nombre':
      validationInput(expresiones.nombre, i.target, 'name');
    break;
    case'apellido':
      validationInput(expresiones.nombre, i.target, 'lastname');
    break;
    case'email':
      validationInput(expresiones.correo, i.target, 'email');
    break;
    default:
  }
}
const validationInput = (expresion, input, campo) =>{
  if (expresion.test(input.value)){
    document.getElementById(campo).classList.remove('borderForm');
    document.getElementById(campo).classList.add('borderFormCorrecto');
    campos[campo] = true;
  }else{
    document.getElementById(campo).classList.add('borderForm');
    document.getElementById(campo).classList.remove('borderFormCorrecto');
    campos[campo] = false;
  }
};
inputs.forEach((input)=>{
  input.addEventListener('keyup', validationForm);
  input.addEventListener('blur', validationForm);
})

boton.addEventListener("click", function (e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const lastname = document.getElementById("lastname");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const exito = document.getElementById('exito');
  const error = document.getElementById('err');
  const send = document.getElementById('send');

  if (campos.name && campos.lastname && campos.email){
    send.classList.remove('none');
    axios({
      method: "post",
      url: api_url + "contact/send-contact-form",
      data: {
        name: name.value,
        lastname: lastname.value,
        email: email.value,
        message: message.value,
      },
    })
      .then(function (res) {
        const { status } = res;
        if (status === 200) {
          name.value = "";
          lastname.value = "";
          email.value = "";
          message.value = "";
          exito.classList.remove('none');
          setTimeout(() => {
            exito.classList.add('none');
          }, 2000);
        }
      })
      .catch(function (err) {
        console.log(err.response);
        error.classList.remove('none');
        setTimeout(() => {
          error.classList.add('none');
        }, 2000);
        
      })
      .then(function () {
        send.classList.add('none');
      });
    
  }else{
    alert('Por favor llenar correctamente el formulario');
  }

     

});
