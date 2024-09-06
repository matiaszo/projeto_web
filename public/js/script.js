
const dataReserva = document.getElementById('dataReserva');

dataReserva.min = Date.now();

function mudarCapacidade(){
    let local = document.getElementById('localReserva').value;
    local = local.split('/');
    let quant = document.getElementById('quantidade');
    quant.value  = local[1];
}