const { post } = require("../../routes");


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
    
    let nomeChurrasqueiraModal = document.getElementById('nomeChurrasqueiraModal');
    let capacidadeChurrasqueiraModal = document.getElementById('capacidadeChurrasqueiraModal');
    
    let nomeAntigo = document.getElementById('nomeLocal' + idChurrasqueira).innerHTML;
    let capacidadeAntiga = document.getElementById('capacidadeLocal' + idChurrasqueira).innerHTML;
    
    formEditar.action = "/editarChurrasqueira/" + idChurrasqueira + "/" + idUsuario;
    formEditar.method = 'post'

    nomeChurrasqueiraModal.value = nomeAntigo.trim();
    capacidadeChurrasqueiraModal.value = parseInt(capacidadeAntiga, 10);
}

function cancelaReserva(idReservaLocal, iduser){
    let form = document.getElementById('cancelaReserva');
    form.action = '/excluirReservaLocal/' + idReservaLocal + '/' + iduser

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
}

function excluirChurrasqueira(idChurrasqueira, idUsuario){
    let formExcluir = document.getElementById('excluirChurrasqueira');
    formExcluir.action = "/excluirChurrasqueira/" + idChurrasqueira + "/" + idUsuario;
}

function mudarTema(){
    const body = document.body;
    const forms = document.getElementById("form");
    let inputEdv = document.getElementById('edv');
    let inputLocal = document.getElementById('localReserva');
    let inputCap = document.getElementById('quantidade');
    let inputData = document.getElementById('dataReserva');

    const sun = document.getElementById('sun');
    const moon = document.getElementById('moon');

    if(sun.style.display == 'none'){
        sun.style= 'display:show';
        moon.style = 'display:none';

        body.classList = 'darkMode';

        try{

            forms.classList = 'darkMode';
            forms.style.backgroundColor = 'rgb(30, 30, 30)';
    
            inputEdv.style.backgroundColor =  'rgb(30, 30, 30)';
            inputEdv.style.color = 'white'
    
            inputLocal.style.backgroundColor =  'rgb(30, 30, 30)';
            inputLocal.style.color = 'white'
    
            inputCap.style.backgroundColor =  'rgb(30, 30, 30)';
            inputCap.style.color = 'white'
    
            inputData.style.backgroundColor =  'rgb(30, 30, 30)';
            inputData.style.color = 'white'
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
            while( i >= 0){
                let cardReserva = document.getElementById(`cardReserva${i}`);
                cardReserva.style.backgroundColor = 'rgb(30, 30, 30)';
                cardReserva.style.color = 'white'

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
            modalAddChurras.style.color = 'white'
            modalAddChurras.style.backgroundColor = 'rgb(30, 30, 30)';

            let inputNome = document.getElementById('nomeChurrasqueira');
            inputNome.style.backgroundColor = 'rgb(30, 30, 30)';
            inputNome.style.color = 'white';

            let inputCapacidade= document.getElementById('capacidadeChurrasqueira');
            inputCapacidade.style.backgroundColor = 'rgb(30, 30, 30)';
            inputCapacidade.style.color = 'white';
        } catch{
            console.log('erro no modal add churrras')
        }

        try{
            let editaChurras = document.getElementById('editarChurrasqueira');
            editaChurras.style.backgroundColor = 'rgb(30, 30, 30)';
            editaChurras.style.color = 'white'

            let inputNomeEdita = document.getElementById('nomeChurrasqueiraModal');
            inputNomeEdita.style.backgroundColor = 'rgb(30, 30, 30)';
            inputNomeEdita.style.color = 'white';

            let inputCapacidadeEdita = document.getElementById('capacidadeChurrasqueiraModal');
            inputCapacidadeEdita.style.backgroundColor = 'rgb(30, 30, 30)';
            inputCapacidadeEdita.style.color = 'white';
        }
        catch{
            console.log('erro modal editar')
        }

        try{
            let excluiChurras = document.getElementById('modalExcluirChurras');
            excluiChurras.style.backgroundColor = 'rgb(30, 30, 30)';
        } catch{
            console.log('erro no modal excluir churras')
        }


    } else{

        sun.style = 'display:none';
        moon.style = 'display:show';
        body.classList = ''

        try{
            forms.classList = ''
            forms.style.backgroundColor = '';
    
            inputEdv.style.backgroundColor =  '';
            inputEdv.style.color = ''
    
            inputLocal.style.backgroundColor =  '';
            inputLocal.style.color = ''
    
            inputCap.style.backgroundColor =  '';
            inputCap.style.color = ''
    
            inputData.style.backgroundColor =  '';
            inputData.style.color = ''
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
            while( i >= 0){
                let cardReserva = document.getElementById(`cardReserva${i}`);
                cardReserva.style.backgroundColor = '';
                cardReserva.style.color = ''

                i++;
            }
        }
        catch{
            console.log('erro')
        }

        try{
            let modalCancelar = document.getElementById('modalCancelar');
            modalCancelar.style.backgroundColor = '';
            modalCancelar.style.color = '';
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
            tabelaReserva.classList = 'table ';
        }
        catch{
            console.log("erro na tabela")
        }

        try{
            let modalAddChurras = document.getElementById('modalAddChurras');
            modalAddChurras.style.backgroundColor = '' ;
            modalAddChurras.style.color = '' ;

            let inputNome = document.getElementById('nomeChurrasqueira');
            inputNome.style.backgroundColor = '';
            inputNome.style.color = '';

            let inputCapacidade= document.getElementById('capacidadeChurrasqueira');
            inputCapacidade.style.backgroundColor = '';
            inputCapacidade.style.color = '';

        } catch{
            console.log('erro no modal')
        }

        try{
            let editaChurras = document.getElementById('editarChurrasqueira');
            editaChurras.style.backgroundColor = '';
            editaChurras.style.color = ''

            let inputNomeEdita = document.getElementById('nomeChurrasqueiraModal');
            inputNomeEdita.style.backgroundColor = '';

            let inputCapacidadeEdita = document.getElementById('capacidadeChurrasqueiraModal');
            inputCapacidadeEdita.style.backgroundColor = '';
            inputNomeEdita.style.color = '';
            inputCapacidadeEdita.style.color = '';
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
}