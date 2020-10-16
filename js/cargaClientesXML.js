$(document).ready(function () {

    $.get("../XMLDocs/ClientesXML.xml", function (data) {
        var clientes = $(data).find("CLIENTE");
        clientes.each(function () {

            var option = $("<option>", {
                "value": $(this).attr("IDCLIENTE")
                , "text": $(this).find("NOMBRE").first().text()
                // , "data-id": $(this).attr("IDCLIENTE")
                // , "data-direccion": $(this).find("DIRECCION").text()
                // , "data-email": $(this).find("EMAIL").text()
                // , "data-codigoPostal": $(this).find("CODIGOPOSTAL").text()
                // , "data-paginaWeb": $(this).find("PAGINAWEB").text()
                // , "data-fotoCliente": $(this).find("IMAGENCLIENTE").text()
            });
            $("#selectClientes").append(option);

        });

        $("#selectClientes").change(function () {
            var idCliente = $(this).val();

            clientes.each(function () {
                if ($(this).attr("IDCLIENTE") == idCliente) {
                    $("#cajaNombre").text("Nombre: " + $(this).find("NOMBRE").text());
                    $("#cajaDireccion").text("Direccion: " + $(this).find("DIRECCION").text());
                    $("#cajaEmail").text("Email: " + $(this).find("EMAIL").text());
                    $("#cajaCodigoPostal").text("CP: " + $(this).find("CODIGOPOSTAL").text());
                    $("#cajaPaginaWeb").text("Website: " + $(this).find("PAGINAWEB").text());
                    $("#cajaImagen").attr("src", $(this).find("IMAGENCLIENTE").text());

                }
            });
        });

    });
});
