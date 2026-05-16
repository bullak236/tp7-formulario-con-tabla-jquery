$(document).ready(function () {

    $('#miTabla').DataTable();

    $("#formulario").submit(function (event) {

        event.preventDefault();

        let nombre = $("#nombre").val();
        let apellido = $("#apellido").val();
        let dni = $("#dni").val();
        let correo = $("#correo").val();

        // Expresiones regulares
        let soloLetras = /^[A-Za-záéíóúÁÉÍÓÚñÑ\s]+$/;

        // Validaciones
        if (!soloLetras.test(nombre)) {

            alert("El nombre solo debe tener letras");
            return;

        }

        if (!soloLetras.test(apellido)) {

            alert("El apellido solo debe tener letras");
            return;

        }

        if (!soloNumeros.test(dni)) {

            alert("El DNI solo debe tener números");
            return;

        }

        let fila = `
            <tr>
                <td>${nombre}</td>
                <td>${apellido}</td>
                <td>${dni}</td>
                <td>${correo}</td>
            </tr>
        `;

        $("#tablaDatos").append(fila);

        $("#formulario")[0].reset();

    });

});