const api_url = "https://cleargroup-landingpage-api.herokuapp.com/api/";

const boton = document.getElementById("contact-form-submit");
boton.addEventListener("click", function (e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const lastname = document.getElementById("lastname");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  //loading.style.display = "block";
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
      console.log(res);
    })
    .catch(function (err) {
      console.log(err.response);
      //mensaje.innerText = "Error de conexión " + err;
    })
    .then(function () {
      //loading.style.display = "none";
    });
});
