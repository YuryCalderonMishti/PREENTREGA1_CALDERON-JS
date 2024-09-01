
fetch('tratamientos.json')
    .then(response => response.json())
    .then(data => {
        renderizarProductos(data)
    })
    .catch(error => console.error('Error al cargar tratamientos:', error))


let carrito = JSON.parse(localStorage.getItem('carrito')) || []


function renderizarProductos(productos) {
    const listaProductos = document.getElementById('lista-productos')
    listaProductos.innerHTML = ''
    productos.forEach(producto => {
        const div = document.createElement('div');
        div.className = 'producto';
        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <button onclick="agregarAlCarrito(${producto.id}, '${producto.nombre}', ${producto.precio})">Añadir al carrito</button>
        `;
        listaProductos.appendChild(div);
    });
}


function agregarAlCarrito(id, nombre, precio) {
    const productoExistente = carrito.find(producto => producto.id === id)

    if (productoExistente) {
        productoExistente.cantidad++
        productoExistente.subtotal = productoExistente.precio * productoExistente.cantidad
    } else {
        carrito.push({
            id,
            nombre,
            precio,
            cantidad: 1,
            subtotal: precio
        })
    }

    localStorage.setItem('carrito', JSON.stringify(carrito))
    renderizarCarrito()
}


function renderizarCarrito() {
    const contenedorCarrito = document.getElementById('carrito-contenido')
    contenedorCarrito.innerHTML = ''

    let total = 0

    carrito.forEach(producto => {
        const div = document.createElement('div')
        div.className = 'producto-carrito'
        div.innerHTML = `
            <p>${producto.nombre} (x${producto.cantidad})</p>
            <p>Subtotal: $${producto.subtotal}</p>
        `
        contenedorCarrito.appendChild(div)

        total += producto.subtotal
    })

    const divTotal = document.createElement('div')
    divTotal.className = 'total-carrito'
    divTotal.innerHTML = `<h3>Total: $${total}</h3>`
    contenedorCarrito.appendChild(divTotal)
}


function finalizarCompra() {
    carrito = []
    localStorage.removeItem('carrito')
    renderizarCarrito()
}


function reservarTurno(e) {
    e.preventDefault()
    document.getElementById('reserva-form').reset()
    finalizarCompra()
}


document.getElementById('finalizarCompra').addEventListener('click', finalizarCompra)
document.getElementById('reserva-form').addEventListener('submit', reservarTurno)
document.getElementById('verCarrito').addEventListener('click', () => {
    document.getElementById('carrito').classList.toggle('oculto')
    document.getElementById('productos').classList.toggle('oculto')
    document.getElementById('reserva').classList.add('oculto')
});
document.getElementById('reservarTurno').addEventListener('click', () => {
    document.getElementById('reserva').classList.toggle('oculto')
    document.getElementById('productos').classList.add('oculto')
    document.getElementById('carrito').classList.add('oculto')
})


renderizarCarrito()
