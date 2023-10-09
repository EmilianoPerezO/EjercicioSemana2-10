const lista = document.getElementById("lista");
const submitBtn = document.getElementById("submit");
const URL = "productos.json"
const seleccionadoDiv = document.getElementById("seleccionado");
const inputCantidad = document.getElementsByClassName("cantidad");

let productosData;
let carritoProducto = [];

fetch(URL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        showData(data);
    })
    .catch(err => console.log(err))




function showData(data) {
    data.forEach(element => {
        const row = document.createElement("tr");
        row.innerHTML += ` 
                <td>${element.id}</td>
                <td>${element.producto}</td>
                <td>${element.descripcion}</td>
                <td>${element.precio}</td>
                <td class="cantidad ">
                    <input class="numero" type="number" min="0">
                    <button class="btn btn-primary btnAdd" id="btnAdd${element.id}">add</button>
                </td>
            `;
        lista.appendChild(row);

        const btnAdd = document.getElementById(`btnAdd${element.id}`);
        btnAdd = document.getElementById(`"btnAdd${element.id}"`);
        btnAdd.addEventListener("click", () => {

            const cantidadIngresada = row.querySelector(".numero");
            const cantidad = parseInt

            if (cantidad > 0 && cantidad <= element.stock) {
                const productoSeleccionado = {
                    id: element.id,
                    producto: element.producto,
                    precio: element.precio,
                    cantidad: cantidad
                };
                carritoProducto.push(productoSeleccionado);
                actualizarCarrito();
            }
        });
    });
}


function actualizarCarrito() {
    // Limpiar contenido previo del carrito
    carrito.innerHTML = "";

    // Mostrar los productos en el carrito
    carritoProducto.forEach(producto => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${producto.producto}</td>
            <td>${producto.precio}</td>
            <td>${producto.cantidad}</td>
            <td>${producto.precio * producto.cantidad}</td>
        `;
        carrito.appendChild(row);
    });
}
lista.addEventListener("change", (event) => {
    if (event.target.classList.contains("cantidad")) {
        updateSubtotal(event.target);
    }
});


inputCantidad.addEventListener("change", () => {
    const mostrarSubTotal = document.getElementsByClassName("subTotal");
    mostrarSubTotal = "";
    const precioSubTotal = data.precio * inputCantidad;
    mostrarSubTotal.innerHTML = `
        ${precioSubTotal};
    `;
});