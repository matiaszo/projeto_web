

function pad(valor) { // completa com zeros à esquerda, caso necessário
    return valor.toString().padStart(2, '0');
}

function formata(data) {
    return `${data.getFullYear()}-${pad(data.getMonth() + 1)}-${pad(data.getDate())}`;
}

const campo = document.getElementById('dataReserva');

window.addEventListener('DOMContentLoaded', function() {
    var data = new Date(); // data de hoje
    campo.min = formata(data);
    // 2 anos à frente
    data.setMonth(data.getMonth() + 2);
    campo.max = formata(data);
});




function mudarCapacidade(){
    let local = document.getElementById('localReserva').value;
    local = local.split('/');
    let quant = document.getElementById('quantidade');
    quant.value  = local[1];
}

function editarChurrasqueira(idChurrasqueira, idUsuario){
    let formEditar = document.getElementById('editarChurrasqueira');

    let nomeChurrasqueiraModal = document.getElementById('nomeChurrasqueiraModal');
    let capacidadeChurrasqueiraModal = document.getElementById('capacidadeChurrasqueiraModal');

    let nomeAntigo = document.getElementById('nomeLocal' + idChurrasqueira).innerHTML;
    let capacidadeAntiga = document.getElementById('capacidadeLocal' + idChurrasqueira).innerHTML;

    formEditar.action = "/editarChurrasqueira/" + idChurrasqueira + "/" + idUsuario;

    nomeChurrasqueiraModal.value = nomeAntigo;
    capacidadeChurrasqueiraModal.value = capacidadeAntiga;

}

function cancelaReserva(idReservaLocal){
    let local = document.getElementById('Local'+ idReservaLocal ).innerHTML;
    let capacidade = document.getElementById('Capacidade' + idReservaLocal).innerHTML;
    let data = document.getElementById('Data' + idReservaLocal).innerHTML;
    let horario = document.getElementById('Hora' + idReservaLocal).innerHTML;

    let localModal = document.getElementById('LocalModal');
    let capacidadeModal = document.getElementById('CapModal');
    let dataModal = document.getElementById('DataModal');
    let horaModal = document.getElementById('HoraModal');

    localModal.innerHTML = local;
    capacidadeModal.innerHTML = capacidade;
    dataModal.innerHTML = data;
    horaModal.innerHTML = horario;

    let form = document.getElementById('cancelaReserva');
    form.action = '/excluirReservaLocal/' + idReservaLocal
}
