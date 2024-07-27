const procedimientos = [
    { id: 1, nombre: "Manicura básica", precio: 20 },
    { id: 2, nombre: "Manicura francesa", precio: 25 },
    { id: 3, nombre: "Manicura en gel", precio: 30 },
    { id: 4, nombre: "Manicura de acrílico", precio: 35 },
    { id: 5, nombre: "Relleno de uñas acrílicas", precio: 35 },
    { id: 6, nombre: "Uñas de gel", precio: 40 },
    { id: 7, nombre: "Uñas esculpidas", precio: 55 },
    { id: 8, nombre: "Retiro de uñas acrílicas", precio: 15 },
    { id: 9, nombre: "Retiro de uñas de gel", precio: 15 }
]


function obtenerProcedimientoPorId(id) {
    return procedimientos.find(proc => proc.id === id)
}

function costoTotal(precioBase, descuento) {
    return precioBase - (precioBase * (descuento / 100))
}

function mostrarPrecio(procedimiento) {
    alert(`Las ${procedimiento.nombre} salen: $${procedimiento.precio}`)
}

let descuentoAplicado = false
let carrito = []

document.getElementById('btnSaludar').addEventListener('click', function() {
    const nombre = document.getElementById('nombre').value
    const apellido = document.getElementById('apellido').value
    alert(`¡Hola ${nombre} ${apellido}!. Bienvenido a tu salón de uñas especializado.`);
    mostrarProcedimientos()
});

function mostrarProcedimientos() {
    document.getElementById('procedimientos').style.display = 'block'
    const lista = document.getElementById('listaProcedimientos')
    lista.innerHTML = ''
    procedimientos.forEach(proc => {
        const li = document.createElement('li')
        li.textContent = `${proc.nombre} - $${proc.precio}`
        li.addEventListener('click', () => seleccionarProcedimiento(proc.id))
        lista.appendChild(li)
    });
}

function seleccionarProcedimiento(id) {
    const procedimiento = obtenerProcedimientoPorId(id)
    mostrarPrecio(procedimiento)
    carrito.push(procedimiento)
    document.getElementById('reserva').style.display = 'block'
}

document.getElementById('btnReservar').onclick = () => {
    alert('Usted ha elegido realizarse el procedimiento de uñas, continuaremos eligiendo la fecha.')
    elegirFecha()
};

document.getElementById('btnOfertas').onclick = () => {
    if (!descuentoAplicado) {
        alert('¡Espera, tenemos una súper oferta para ti! Te daremos 10% de descuento si reservas el lunes o martes.')
        aplicarDescuento()
    } else {
        alert('Ya has aplicado un descuento previamente.')
    }
};

document.getElementById('btnVerCarrito').onclick = () => {
    mostrarCarrito()
};

document.getElementById('btnFinalizar').onclick = () => {
    alert(`Compra finalizada. Total a pagar: $${calcularTotalCarrito()}`)
    carrito = []
    document.getElementById('carrito').style.display = 'none'
    document.getElementById('totalCarrito').textContent = '0'
};

function elegirFecha() {
    const diaDeReservacion = Number(prompt("Ingrese el día de la semana que desea el servicio:\n1 - Lunes\n2 - Martes\n3 - Miércoles\n4 - Jueves\n5 - Viernes\n6 - Sábado\n7 - Domingo"))
    if (diaDeReservacion >= 1 && diaDeReservacion <= 7) {
        alert("¡Fecha reservada!")
    } else {
        alert("Opción incorrecta")
    }
}

function aplicarDescuento() {
    const diaDeReservacion2 = Number(prompt("Ingrese el día de la semana que desea el servicio:\n1 - Lunes\n2 - Martes"))
    if (diaDeReservacion2 === 1 || diaDeReservacion2 === 2) {
        carrito = carrito.map(proc => {
            proc.precio = costoTotal(proc.precio, 10);
            return proc;
        });
        descuentoAplicado = true
    } else {
        alert("Opción incorrecta")
    }
}

function mostrarCarrito() {
    document.getElementById('carrito').style.display = 'block'
    const listaCarrito = document.getElementById('listaCarrito')
    listaCarrito.innerHTML = ''
    carrito.forEach(proc => {
        const li = document.createElement('li')
        li.textContent = `${proc.nombre} - $${proc.precio}`
        listaCarrito.appendChild(li)
    });
    document.getElementById('totalCarrito').textContent = calcularTotalCarrito()
}

function calcularTotalCarrito() {
    return carrito.reduce((total, proc) => total + proc.precio, 0)
}

function obtenerProcedimientoPorId(id) {
    return procedimientos.find(proc => proc.id === id)
}

function costoTotal(precioBase, descuento) {
    return precioBase - (precioBase * (descuento / 100))
}

function mostrarPrecio(procedimiento) {
    alert(`Las ${procedimiento.nombre} salen: $${procedimiento.precio}`)
}
