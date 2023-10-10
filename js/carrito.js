const carrito = document.getElementById("carro");

function showCarrito() {
  // Obtiene los productos almacenados en localStorage
  const carritoProductos =
    JSON.parse(localStorage.getItem("carritoProductos")) || [];

  // Muestra los productos en la tabla del carrito
  carritoProductos.forEach((producto) => {
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

// Llama a la función para mostrar los productos en el carrito al cargar la página
showCarrito();
let productosDatal;

function calcularSubtotal(precio, cantidad) {
  return precio * cantidad;
}
