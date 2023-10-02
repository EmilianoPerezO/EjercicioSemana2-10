const lista = document.getElementById("lista");
const submitBtn = document.getElementById("submit");
const URL = "productos.json"
const seleccionadoDiv = document.getElementById("seleccionado");


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
            <td><input type="number" min="0"></td>
            
        </tr>`;
    });

    /*lista.innerHTML = option.HTML;*/

    lista.addEventListener("change", () => {
        const opcionSeleccionada = lista.option[lista.id].text;
        seleccionadoDiv.innerHTML = `Seleccionado: ${opcionSeleccionada}`;
    })

}

