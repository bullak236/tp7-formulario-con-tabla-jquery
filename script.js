$(document).ready(function () {

    // Activar DataTable
    $('#miTabla').DataTable();

    // Evento del formulario
    $("#formulario").submit(function (event) {

        event.preventDefault();

        let nombre = $("#nombre").val();
        let apellido = $("#apellido").val();
        let dni = $("#dni").val();
        let correo = $("#correo").val();

        // Expresiones regulares
        let soloLetras = /^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/;
        let soloNumeros = /^[0-9]+$/;

        // Validar nombre
        if (!soloLetras.test(nombre)) {

            alert("El nombre solo debe tener letras");
            return;

        }

        // Validar apellido
        if (!soloLetras.test(apellido)) {

            alert("El apellido solo debe tener letras");
            return;

        }

        // Validar DNI
        if (!soloNumeros.test(dni)) {

            alert("El DNI solo debe tener números");
            return;

        }

        // Agregar fila a la tabla
        $('#miTabla').DataTable().row.add([
            nombre,
            apellido,
            dni,
            correo
        ]).draw();

        // Limpiar formulario
        $("#formulario")[0].reset();

    });

});