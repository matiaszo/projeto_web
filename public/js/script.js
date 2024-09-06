
const dataReserva = document.getElementById('dataReserva');

dataReserva.min = Date.now();

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