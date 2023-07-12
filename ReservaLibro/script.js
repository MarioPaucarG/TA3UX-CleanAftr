
  document.getElementById('book-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario
  
    // Obtener los valores de los campos
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    var reservationDate = document.getElementById('reservation-date').value;
    var deliveryDate = document.getElementById('delivery-date').value;
  
    // Mostrar los valores en la página web
    document.getElementById('display-title').textContent = title;
    document.getElementById('display-author').textContent = author;
    document.getElementById('display-reservation-date').textContent = reservationDate;
    document.getElementById('display-delivery-date').textContent = deliveryDate;
  
    // Mostrar los datos en la sección de visualización
    document.getElementById('display-data').style.display = 'block';
  });
  
  