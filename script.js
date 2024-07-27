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

function calcularTotalCarrito(carrito) {
    return carrito.reduce((total, proc) => total + proc.precio, 0)
}

let descuentoAplicado = false
let carrito = []

// Saludo inicial
alert("¡Bienvenido a Moira!")
const nombre = prompt("Por favor ingrese su nombre:")
const apellido = prompt("Por favor ingrese su apellido:")
alert(`¡Hola ${nombre} ${apellido}!. Bienvenido a tu salón de uñas especializado.`)

// Selección de procedimientos
let continuar = true
while (continuar) {
    let mensaje = "Ingrese el número según el procedimiento que desee realizarse:\n"
    procedimientos.forEach(proc => {
        mensaje += `${proc.id} - ${proc.nombre}: $${proc.precio}\n`
    })

    const opcion = Number(prompt(mensaje))
    const procedimiento = obtenerProcedimientoPorId(opcion)

    if (procedimiento) {
        carrito.push(procedimiento)
        alert(`Has agregado ${procedimiento.nombre} al carrito.`)
    } else {
        alert("Opción incorrecta")
    }

    continuar = confirm("¿Desea agregar otro procedimiento?")
}

// Reservar o aplicar descuento
if (confirm("¿Deseas reservar el procedimiento(s) elegido(s)?")) {
    alert("Usted ha elegido realizarse el procedimiento de uñas, continuaremos eligiendo la fecha.")
    const diaDeReservacion = Number(prompt("Ingrese el día de la semana que desea el servicio:\n1 - Lunes\n2 - Martes\n3 - Miércoles\n4 - Jueves\n5 - Viernes\n6 - Sábado\n7 - Domingo"))
    if (diaDeReservacion >= 1 && diaDeReservacion <= 7) {
        alert("¡Fecha reservada!")
    } else {
        alert("Opción incorrecta")
    }
} else {
    if (!descuentoAplicado) {
        alert("¡Espera, tenemos una súper oferta para ti! Te daremos 10% de descuento si reservas el lunes o martes.")
        const diaDeReservacion2 = Number(prompt("Ingrese el día de la semana que desea el servicio:\n1 - Lunes\n2 - Martes"))
        if (diaDeReservacion2 === 1 || diaDeReservacion2 === 2) {
            carrito = carrito.map(proc => {
                proc.precio = costoTotal(proc.precio, 10)
                return proc;
            })
            descuentoAplicado = true
            alert("Descuento aplicado.")
        } else {
            alert("Opción incorrecta")
        }
    } else {
        alert("Ya has aplicado un descuento previamente.")
    }
}

// Mostrar carrito y total
let mensajeCarrito = "Carrito de compras:\n"
carrito.forEach(proc => {
    mensajeCarrito += `${proc.nombre}: $${proc.precio}\n`
})
mensajeCarrito += `Total: $${calcularTotalCarrito(carrito)}`
alert(mensajeCarrito)

// Finalizar compra
if (confirm("¿Desea finalizar la compra?")) {
    alert(`Compra finalizada. Total a pagar: $${calcularTotalCarrito(carrito)}`)
    carrito = []
} else {
    alert("Compra cancelada.")
}
