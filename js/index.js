let cantidadSolicitudes = 2;
let cantidadConexiones = 498;

let mostrarSolicitudes = document.getElementById("numeroSolicitudes");
let mostrarConexiones = document.getElementById("numeroConexiones");

let nombreUsuario = document.getElementById("nombreUsuario");

function remover(elemento) {
    //Se obtiene el ID del elemento padre
    let padre = elemento.parentNode.id;
    document.getElementById(padre).remove();
    cantidadSolicitudes--;
    mostrarSolicitudes.innerText = cantidadSolicitudes;
}

function agregar(elemento) {
    remover(elemento);
    cantidadConexiones++;
    mostrarConexiones.innerText = cantidadConexiones;
}

function editar() {
    nombreUsuario.innerText = "Alexander Garavito";
}
