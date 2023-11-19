// Módulo de fecha
function actualizarFecha() {
    var fechaElemento = document.getElementById('fecha');
    var fechaActual = new Date();
    var dia = fechaActual.getDate();
    var mes = fechaActual.getMonth() + 1;
    var año = fechaActual.getFullYear() % 100;

    dia = (dia < 10) ? '0' + dia : dia;
    mes = (mes < 10) ? '0' + mes : mes;
    año = (año < 10) ? '0' + año : año;

    var fechaFormateada = dia + '/' + mes + '/' + año;

    fechaElemento.textContent = fechaFormateada;
}

actualizarFecha();
setInterval(actualizarFecha, 1000);

// Seleccion de la barra lateral
function agregar() {
    document.getElementById('ag-cliente').style.display="block";
    document.getElementById('list-clientes').style.display="none";
}
function lista() {
    document.getElementById('ag-cliente').style.display="none";
    document.getElementById('list-clientes').style.display="block";
}