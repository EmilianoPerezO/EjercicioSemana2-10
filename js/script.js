const lista = document.getElementById("lista");
const submitBtn = document.getElementById("submit");
const URL = "productos.json"
const seleccionadoDiv = document.getElementById("seleccionado");
const inputCantidad = document.getElementsByClassName("cantidad");

const productosCarrito = [];


fetch(URL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        showData(data);
    })
    .catch(err => console.log(err))


function showData(data) {
    data.forEach(element => {
        lista.innerHTML += `
        <tr>
            <td>${element.producto}</td>
            <td>${element.precio}</td>
            <td class="cantidad"><input type="number" min="0"><button 
            class="btn btn-primary" id="btnAdd">add</button></td>
            
        </tr>`;



    });
    const btnAdd = document.getElementById("btnAdd");
    btnAdd.addEventListener("click", () => {
        const newProduct = {
            id: `${element.id}`,
            producto: `${element.producto}`,
            precio: `${element.precio}`
            // cantidad: `${inputCantidad}`
        }
        console.log(newProduct);
        productosCarrito.push(newProduct);


    })
    /*
        lista.addEventListener("change", () => {
            const opcionSeleccionada = lista.option[lista.id].text;
            seleccionadoDiv.innerHTML = `Seleccionado: ${opcionSeleccionada}`;
        })
    */



}