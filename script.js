document.addEventListener("DOMContentLoaded", () => {
    const nombreInput = document.getElementById('nombre');
    const apellidoInput = document.getElementById('apellido');
    const procedimientoSelect = document.getElementById('procedimiento');
    const reservaSelect = document.getElementById('reserva');
    const fechaReservaDiv = document.getElementById('fechaReservaDiv');
    const diaReservaSelect = document.getElementById('diaReserva');
    const btnFinalizar = document.getElementById('comprar');
    const contenedorCarrito = document.getElementById('contenedorCarrito');
    const totalCarrito = document.getElementById('totalCarrito');
    const mensajeFinalCompra = document.getElementById('mensajeFinalCompra');

    let carrito = obtenerCarrito();

    function actualizarSaludo() {
        const nombre = nombreInput.value;
        const apellido = apellidoInput.value;
        const saludoPersonalizado = document.getElementById('saludoPersonalizado');
        saludoPersonalizado.innerHTML = nombre && apellido ? `¡Hola ${nombre} ${apellido}! Bienvenido a tu salón de uñas.` : '';
    }

    function addToCarrito(nombre, precio) {
        const producto = { nombre, precio, unidades: 1, subtotal: precio };
        carrito.push(producto);
        setearCarrito(carrito);
        renderizarCarrito();
    }

    function renderizarCarrito() {
        contenedorCarrito.innerHTML = '';
        let total = 0;
        carrito.forEach(({ nombre, precio, unidades, subtotal }) => {
            contenedorCarrito.innerHTML += `
                <div class="tarjetaCarrito">
                    <p>${nombre}</p>
                    <p>$${precio}</p>
                    <p>${unidades} u.</p>
                    <p>$${subtotal}</p>
                </div>
            `;
            total += subtotal;
        });
        totalCarrito.innerText = `Total: $${total.toFixed(2)}`;
    }

    function finalizarCompra() {
        if (carrito.length > 0) {
            setearCarrito([]);
            renderizarCarrito();
            mensajeFinalCompra.innerText = "¡Gracias por su compra!";
        } else {
            mensajeFinalCompra.innerText = "El carrito está vacío.";
        }
    }

    function obtenerCarrito() {
        return JSON.parse(localStorage.getItem('carrito')) || [];
    }

    function setearCarrito(carrito) {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }

    nombreInput.addEventListener('input', actualizarSaludo);
    apellidoInput.addEventListener('input', actualizarSaludo);

    procedimientoSelect.addEventListener('change', (event) => {
        const precio = parseFloat(event.target.value);
        const nombre = event.target.options[event.target.selectedIndex].text.split(' - ')[0];
        addToCarrito(nombre, precio);
    });

    reservaSelect.addEventListener('change', () => {
        if (reservaSelect.value === '1') {
            fechaReservaDiv.style.display = 'block';
        } else {
            fechaReservaDiv.style.display = 'none';
        }
    });

    diaReservaSelect.addEventListener('change', () => {
        const dia = diaReservaSelect.options[diaReservaSelect.selectedIndex].text;
        mensajeFinalCompra.innerText = `¡Perfecto! Fecha reservada para el ${dia}.`;
    });

    btnFinalizar.addEventListener('click', finalizarCompra);
});
