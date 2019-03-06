function nuevoContacto()
{
    $.ajax({
        url:"/contactos",
        type:"POST",
        data: JSON.stringify({nombre: $("#nombre").val(), telefono: $("#telefono").val(), edad: $("#edad").val()}),
        contentType:"application/json; charset=utf-8",
        dataType:"json",
        success: function(data) {
            if (data.error) {
                $("#nuevoError").css('display', 'block');
                $("#nuevoOK").css('display', 'none');
            } else {
                $("#nuevoError").css('display', 'none');
                $("#nuevoOK").css('display', 'block');
            }
        }
    });
}