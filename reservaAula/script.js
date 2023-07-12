const reservationForm = document.getElementById("reservation-form");
const submitButton = document.getElementById("submit-button");

reservationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const duration = document.getElementById("duration").value;
  const comments = document.getElementById("comments").value;

  // Aquí se podría agregar código para enviar la información a través de una solicitud AJAX o a través de un servicio web

  console.log(`Nombre: ${name}`);
  console.log(`Correo Electrónico: ${email}`);
  console.log(`Fecha de Reservación: ${date}`);
  console.log(`Hora de Reservación: ${time}`);
  console.log(`Duración de la Reservación: ${duration}`);
  console.log(`Comentarios: ${comments}`);

  // Mostrar los valores en la página web
  document.getElementById("display-name").textContent = name;
  document.getElementById("display-email").textContent = email;
  document.getElementById("display-reservation-date").textContent = date;
  document.getElementById("display-reservation-hour").textContent = time;
  document.getElementById("display-duration").textContent = duration + " hora";
  document.getElementById("display-comments").textContent = comments;

  // Mostrar los datos en la sección de visualización
  document.getElementById("display-data").style.display = "block";
});
