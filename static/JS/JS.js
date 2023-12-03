/*Index*/


document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('Abrirmenu');
    const megamenu = document.querySelector('.megamenu');

    menuToggle.addEventListener('click', function (event) {
        event.stopPropagation();
        megamenu.style.display = (megamenu.style.display === 'none' || megamenu.style.display === '') ? 'block' : 'none';
    });

    megamenu.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});




/*Validar el formulario y redireccionar*/

function validarFormulario(event) {
    event.preventDefault();
    redireccionarRegistro();
    return true;
}

function redireccionarRegistro() {

    setTimeout(function () {
        window.location.href = "./views/Login.html";
    }, 1250);
}



/*Sobre nosotros*/
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('readMoreBtn').addEventListener('click', function () {
        var moreInfo = document.getElementById('moreInfo');
        if (moreInfo.style.display === 'none' || moreInfo.style.display === '') {
            moreInfo.style.display = 'block';
            document.getElementById('readMoreBtn').textContent = 'Leer menos';
        } else {
            moreInfo.style.display = 'none';
            document.getElementById('readMoreBtn').textContent = 'Leer más';
        }
    });
});

/*Añadir mapa*/
function initMap() {
    // Coordenadas de Málaga Capital
    var malaga = { lat: 36.7213, lng: -4.4214 };

    // Crea un mapa centrado en Málaga
    var map = new google.maps.Map(document.getElementById('map'), {
        center: malaga,
        zoom: 12
    });

    var marker = new google.maps.Marker({
        position: malaga,
        map: map,
        title: 'Málaga Capital'
    });
}


/*Contacto*/

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const contactMessage = document.getElementById("contactMessage");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        contactMessage.innerHTML = "¡Gracias por tu mensaje! Te responderemos pronto.";
        contactForm.reset();
    });
});



/*Login*/

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const message = document.getElementById("message");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        /* Verifica si las credenciales son válidas las credenciales
         son usuario para usuario y contraseña para contraseña*/
        if (username === "usuario" && password === "contraseña") {
            message.innerHTML = "Inicio de sesión exitoso!";

            setTimeout(function () {
                window.location.href = "./Index-registrado.html";
            }, 1250);
        } else {
            message.innerHTML = "Credenciales incorrectas. Inténtalo de nuevo.<strong>PISTA:</strong>la contraseña es contraseña y el usuario es usuario";
        }
    });
});

/*Mostrar imagen grande*/
function showDefaultLargeImage() {

    showLargeImage(1, 0, 0, 2);
}

function showLargeImage(imageId, top, left) {
    const largeImage = document.querySelector(`#large-image-container-${imageId} .large-image`);
    const largeImageContainer = document.querySelector(`#large-image-container-${imageId}`);

    const originalImage = document.querySelector(`#image-container-${imageId} .original-image`);
    largeImage.src = originalImage.src;

    // Utilizar unidades relativas para el posicionamiento
    largeImageContainer.style.top = `calc(${top}px + 25%)`;
    largeImageContainer.style.left = `calc(${left}px + -2%)`;
    largeImageContainer.style.display = 'block';
}

function hideLargeImage(imageId) {
    const largeImageContainer = document.querySelector(`#large-image-container-${imageId}`);
    largeImageContainer.style.display = 'none';
}

/*Subir y bajar unidades del producto*/
var precioUnitario = 729; // Precio de cada artículo
var numeroArticulos = 1;
var maxArticulos = 10;

// Función para restar
function restar() {
    if (numeroArticulos > 0) {
        numeroArticulos--;
        actualizarPrecio();
    }
}

// Función para sumar
function sumar() {
    if (numeroArticulos < maxArticulos) {
        numeroArticulos++;
        actualizarPrecio();
    } else {
        alert("El maximo de artículos permitido es 10 ");
    }
}

// Función para actualizar el precio en la sección de resumen
function actualizarPrecio() {
    var subtotal = precioUnitario * numeroArticulos;
    document.getElementById('numero').innerText = numeroArticulos;
    document.getElementById('precio-sin-iva').innerText = subtotal + '€';
    document.getElementById('precio-con-iva').innerText = subtotal + '€';
}




function filtrarProductos() {
    var marcaSeleccionada = obtenerValorSeleccionado("marca");
    var ramSeleccionada = obtenerValorSeleccionado("ram");
    var tipoSeleccionado = obtenerValorSeleccionado("tipo");
    var almacenamientoSeleccionado = obtenerValorSeleccionado("almacenamiento");

    var productos = document.querySelectorAll(".producto");

    productos.forEach(function(producto) {
        var marcaProducto = producto.getAttribute("data-marca");
        var ramProducto = parseInt(producto.getAttribute("data-ram"));
        var tipoProducto = producto.getAttribute("data-tipo");
        var almacenamientoProducto = parseInt(producto.getAttribute("data-almacenamiento"));

        var cumpleFiltro = true;

        if (marcaSeleccionada !== "todas" && marcaProducto !== marcaSeleccionada) {
            cumpleFiltro = false;
        }

        if (ramSeleccionada !== "todas" && ramProducto !== parseInt(ramSeleccionada)) {
            cumpleFiltro = false;
        }

        if (tipoSeleccionado !== "todos" && tipoProducto !== tipoSeleccionado) {
            cumpleFiltro = false;
        }

        if (almacenamientoSeleccionado !== "todas" && almacenamientoProducto !== parseInt(almacenamientoSeleccionado)) {
            cumpleFiltro = false;
        }

        producto.style.display = cumpleFiltro ? "block" : "none";
    });
}

function obtenerValorSeleccionado(id) {
    var elemento = document.getElementById(id);
    return elemento.options[elemento.selectedIndex].value;
}

