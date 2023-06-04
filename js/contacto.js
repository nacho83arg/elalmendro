function enviar_formulario() {
    let formulario = document.getElementById('mi_formulario');
    formulario.submit();
}


 document.getElementById('boton_contacto').addEventListener('click', function(e) {
    e.preventDefault();
    enviar_formulario();
})