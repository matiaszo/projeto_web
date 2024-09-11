

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
    formEditar.action = "/editarChurrasqueira/" + idChurrasqueira + "/" + idUsuario;
    
    let nomeChurrasqueiraModal = document.getElementById('nomeChurrasqueiraModal');
    let capacidadeChurrasqueiraModal = document.getElementById('capacidadeChurrasqueiraModal');
    
    let nomeAntigo = document.getElementById('nomeLocal' + idChurrasqueira).innerHTML;
    let capacidadeAntiga = document.getElementById('capacidadeLocal' + idChurrasqueira).innerHTML;

    nomeChurrasqueiraModal.value = nomeAntigo.trim();
    capacidadeChurrasqueiraModal.value = parseInt(capacidadeAntiga, 10);
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

function excluirChurrasqueira(idChurrasqueira, idUsuario){
    let formExcluir = document.getElementById('excluirChurrasqueira');
    formExcluir.action = "/excluirChurrasqueira/" + idChurrasqueira + "/" + idUsuario;
}

function ligthMode(){
    const body = document.body;
    body.classList = ''   

    let sun = document.getElementById('sun');
    sun.style.display = 'none';  // Esconde o ícone do sol

    let moon = document.getElementById('moon');
    moon.style.display = 'block';

    try{
        const forms = document.getElementById("form");
    
        const inputs = ['edv', 'localReserva', 'quantidade', 'dataReserva'];
        inputs.forEach(id => {
            let input = document.getElementById(id);
            input.style.backgroundColor = '';
            input.style.color = '';
        });

        forms.classList = ''
        forms.style.backgroundColor = '';

    } catch{
        console.log("erro formulario")
    }
    
    try{
        for(let i = 1; i < 3; i++){
            let card = document.getElementById(`card${i}`);
            card.style.backgroundColor = '';
        }

    } catch {
        console.log('erro')
    }
    
    try{
        let i = 0;
        while (true) {
            let cardReserva = document.getElementById(`cardReserva${i}`);
            if (!cardReserva) break;
            cardReserva.style.backgroundColor = '';
            cardReserva.style.color = '';
            i++;
        }
    }
    catch{
        console.log('erro')
    }

    try{
        let modalCancelar = document.getElementById('modalCancelar');
        if (modalCancelar) {
            modalCancelar.style.backgroundColor = '';
            modalCancelar.style.color = '';
        }
    } catch{
        console.log('erro no modal')
    }

    try{
        for(let i = 1; i < 4; i++){
            let cardAdm = document.getElementById(`card${i}`);
            cardAdm.style.backgroundColor = '';
        }
    } catch{
        console.log("erro card adm")
    }

    try{
        let tabelaReserva = document.getElementById("tabela");
        if (tabelaReserva) tabelaReserva.classList.remove('table-dark');
    }
    catch{
        console.log("erro na tabela")
    }

    try{
        let modalAddChurras = document.getElementById('modalAddChurras');
        if (modalAddChurras) {
            modalAddChurras.style.backgroundColor = '';
            modalAddChurras.style.color = '';
        }

        const inputsModal = ['nomeChurrasqueira', 'capacidadeChurrasqueira'];
        inputsModal.forEach(id => {
            let input = document.getElementById(id);
            if (input) {
                input.style.backgroundColor = '';
                input.style.color = '';
            }
        });

    } catch{
        console.log('erro no modal')
    }

    try{
        let editaChurras = document.getElementById('editarChurrasqueira');
        if (editaChurras) {
            editaChurras.style.backgroundColor = '';
            editaChurras.style.color = '';

            const inputsEdita = ['nomeChurrasqueiraModal', 'capacidadeChurrasqueiraModal'];
            inputsEdita.forEach(id => {
                let input = document.getElementById(id);
                if (input) {
                    input.style.backgroundColor = '';
                    input.style.color = '';
                }
            });
        }
    }
    catch{
        console.log('erro modal editar')
    }

    try{
        let excluiChurras = document.getElementById('modalExcluirChurras');
        excluiChurras.style.backgroundColor = '';
    } catch{
        console.log('erro no modal excluir churras')
    }
}

function darkMode(){
    const body = document.body;
    const forms = document.getElementById("form");
    body.classList = 'darkMode';


    let sun = document.getElementById('sun');
    sun.style.display = 'block';  

    let moon = document.getElementById('moon');
    moon.style.display = 'none';
    try{

        forms.classList = 'darkMode';
        forms.style.backgroundColor = 'rgb(30, 30, 30)';

        const inputs = ['edv', 'localReserva', 'quantidade', 'dataReserva'];
        inputs.forEach(id => {
            let input = document.getElementById(id);
            if (input) {
                input.style.backgroundColor = 'rgb(30, 30, 30)';
                input.style.color = 'white';
            }
        });
    } catch{
        console.log('erro no form')
    }
    
    try{
        for(let i = 1; i < 3; i++){
            let card = document.getElementById(`card${i}`);
            card.style.backgroundColor = 'rgb(30, 30, 30)';
        }
    }catch{
        console.log('erro no primeiro')
    }

    try{
        let i = 0;
        while (true) {
            let cardReserva = document.getElementById(`cardReserva${i}`);
            if (!cardReserva) break;
            cardReserva.style.backgroundColor = 'rgb(30, 30, 30)';
            cardReserva.style.color = 'white';
            i++;
        }
    } catch{
        console.log("erro no card reserva")
    }
    
    try{
        let modalCancelar = document.getElementById('modalCancelar');
        modalCancelar.style.backgroundColor = 'rgb(30, 30, 30)';
        modalCancelar.style.color = 'white'
    } catch{
        console.log('erro no modal')
    }

    try{
        for(let i = 1; i < 4; i++){
            let cardAdm = document.getElementById(`card${i}`);
            cardAdm.style.backgroundColor = 'rgb(30, 30, 30)';
        }
    } catch{
        console.log('erro adm')
    }

    try{
        let tabelaReserva = document.getElementById("tabela");
        tabelaReserva.classList = 'table table-dark';
    }
    catch{
        console.log("erro na tabela")
    }

    try{
        let modalAddChurras = document.getElementById('modalAddChurras');
        if (modalAddChurras) {
            modalAddChurras.style.color = 'white';
            modalAddChurras.style.backgroundColor = 'rgb(30, 30, 30)';

            const inputsModal = ['nomeChurrasqueira', 'capacidadeChurrasqueira'];
            inputsModal.forEach(id => {
                let input = document.getElementById(id);
                if (input) {
                    input.style.backgroundColor = 'rgb(30, 30, 30)';
                    input.style.color = 'white';
                }
            });
        }
    } catch{
        console.log('erro no modal add churrras')
    }

    try{
        let editaChurras = document.getElementById('editarChurrasqueira');
        if (editaChurras) {
            editaChurras.style.backgroundColor = 'rgb(30, 30, 30)';
            editaChurras.style.color = 'white';

            const inputsEdita = ['nomeChurrasqueiraModal', 'capacidadeChurrasqueiraModal'];
            inputsEdita.forEach(id => {
                let input = document.getElementById(id);
                if (input) {
                    input.style.backgroundColor = 'rgb(30, 30, 30)';
                    input.style.color = 'white';
                }
            });
        }
    }
    catch{
        console.log('erro modal editar')
    }

    try{
        let excluiChurras = document.getElementById('modalExcluirChurras');
        if (excluiChurras) excluiChurras.style.backgroundColor = 'rgb(30, 30, 30)';
    } catch{
        console.log('erro no modal excluir churras')
    }


}

function getTema(){
    var tema = localStorage.getItem('tema')
    if(tema === 'dark'){
        darkMode()
    } else{
        ligthMode()
    }
}

function mudarTema(){
    const sun = document.getElementById('sun');
    
    if(sun.style.display === 'none'){ 
        localStorage.setItem('tema', 'dark')
    } else{
        localStorage.setItem('tema', 'ligth')
    }
    getTema()
}

getTema()