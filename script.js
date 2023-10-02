const lista = document.getElementById("lista");
const submitBtn = document.getElementById("submit");
const URL = "productos.json"
const seleccionadoDiv = document.getElementById("seleccionado");
const inputCantidad = document.getElementByClass("cantidad");


fetch(URL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        showData(data);
    })
    .catch(err => console.log(err))


function showData(data) {
    /*let optionsHTML = ""; */
    data.forEach(element => {
        lista.innerHTML += `
        <tr>
            <td>${element.producto}</td>
            <td>${element.precio}</td>
            <td class="cantidad"><input type="number" min="0"></td>
            <td class="subTotal"></td>
        </tr>`;
    });
    /*lista.innerHTML = option.HTML;*/

    lista.addEventListener("change", () => {
        const opcionSeleccionada = lista.option[lista.id].text;
        seleccionadoDiv.innerHTML = `Seleccionado: ${opcionSeleccionada}`;
    })


}


inputCantidad.addEventListener("change", () =>{
    const mostrarSubTotal = document.getElementsByClassName("subTotal");
    mostrarSubTotal = "";
    const precioSubTotal = data.precio * inputCantidad;
    mostrarSubTotal.innerHTML = `
        ${precioSubTotal};
    `
})

function subTotal() {
    
}

