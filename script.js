const script_do_google = 'https://script.google.com/macros/s/AKfycbxlG9qZWqfxKOOf2pwCM3_b5bFLEDMpXm79UenpyTsm_Xj4IjqCnKIfsWfGxIzKhBw/exec';
const dados_do_formulario = document.forms['formulario-contatos'];

dados_do_formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    fetch(script_do_google, {
        method: 'POST',
        body: new FormData(dados_do_formulario)
    })
    .then(response => {
        // Se os dados forem enviados corretamente, enviar o alerta abaixo
        alert('Dados enviados com sucesso!');
        dados_do_formulario.reset();
    })
    .catch(error => {
        // Se houver erro no envio, exibirá alerta abaixo
        console.error('Erro no envio dos dados!', error);
    });
});
