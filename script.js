function saludar() {
    alert("¡Bienvenido a Moira!")
}
saludar()

let nombre=prompt("Porfavor ingresar su nombre")
let apellido=prompt("Porfavor ingresar su apellido")
function saludarPersonalizado(nomb,apell) {
    alert("¡Hola "+ nomb + " "+ apell +"!. Bienvenido a tu salon de uñas especializado.")
}
saludarPersonalizado(nombre,apellido)

const opcion = Number(prompt("Ingrese el número segun el procedimiento que desee realizarse:\n1 - Semipermanentes\n2 - Uñas Acrílicas\n3 - Esmaltado tradicional"))
if (opcion === 1) {
    alert("Las uñas semipermanentes sale: $ 50")
} else if (opcion === 2) {
    alert("Las uñas acrílicas sale: $ 150")
} else if (opcion === 3) {
    alert("El esmaltado tradicional sale: $ 25 ")
} else {
    alert("Opción incorrecta")
}

function costoTotal(precioBase,descuentos){
    let subTotal= precioBase - (precioBase*(descuentos/100))
    return subTotal
}
const reserva= Number(prompt("¿Deseas reservar el procedimiento elegido?\n1 - SI\n2 - NO"))
    if (reserva === 1) {
        alert("Usted a elegido realizarse el procedimiento de uñas, continuaremos eligiendo la fecha")
        const diaDeReservacion = Number(prompt("Ingrese el dia de semana que desea el servicio:\n1 - Lunes\n2 - Martes\n3 - Miercoles\n4 - Jueves\n5 - Viernes\n6 - Sábado\n7 - Domingo"))
        if (diaDeReservacion >= 1 && diaDeReservacion <= 7) {
            alert("¡Perfecto Fecha reservada!")
        
        } else {
            alert("Opción incorrecta")
        }
    } 
    else if (reserva === 2) {
        alert("¡Espera tenemos una super oferta para ti!\n Te daremos 10% de descuento si reservas el lunes o martes")
        const diaDeReservacion2 = Number(prompt("Ingrese el dia de semana que desea el servicio:\n1 - Lunes\n2 - Martes"))
        if (diaDeReservacion2 === 1) {
            const opcion = Number(prompt("Ingrese el número segun el procedimiento que desee realizarse:\n1 - Semipermanentes\n2 - Uñas Acrílicas\n3 - Esmaltado tradicional"))
            if (opcion === 1) {
                alert("Las uñas semipermanentes sale: $ " + costoTotal(50,10))
                
            } else if (opcion === 2) {
                alert("Las uñas semipermanentes sale: $ " + costoTotal(150,10))
            } else if (opcion === 3) {
                alert("Las uñas semipermanentes sale: $ " + costoTotal(25,10))
            } else {
                alert("Opción incorrecta")
            }
        } 
        else if (diaDeReservacion2 === 2) {
            const opcion = Number(prompt("Ingrese el número segun el procedimiento que desee realizarse:\n1 - Semipermanentes\n2 - Uñas Acrílicas\n3 - Esmaltado tradicional"))
            if (opcion === 1) {
                alert("Las uñas semipermanentes sale: $ " + costoTotal(50,10))
                
            } else if (opcion === 2) {
                alert("Las uñas semipermanentes sale: $ " + costoTotal(150,10))
            } else if (opcion === 3) {
                alert("Las uñas semipermanentes sale: $ " + costoTotal(25,10))
            } else {
                alert("Opción incorrecta")
            }
        } 
        else {
            alert("Opción incorrecta")
        }
    }
    else {
        alert("Opción incorrecta")
    }


