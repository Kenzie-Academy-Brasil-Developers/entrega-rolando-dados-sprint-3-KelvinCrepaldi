

function rolaDado(){
    let valor = Math.floor(Math.random() * 6);
    return valor;
}

function contaDados(quantidade){
    let contagem = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for(let i = 0; i < quantidade; i++){
        contagem[rolaDado()+rolaDado()]++;
    }
    
    return contagem;
    
}

function criaBarra(lista){

    let container = document.getElementById('container-barras');

    for(let i = 0; i < lista.length; i++){
        console.log(lista[i])
        let numero = document.createTextNode(i+2 + ": " + lista[i]);
        let barra = document.createElement('div');
        barra.appendChild(numero);
        barra.classList.add('barra');
        barra.style.backgroundColor = corAleatoria(i);
        const larguraDaBarra = lista[i]+40
        barra.style.width = `${larguraDaBarra}px`;
        container.appendChild(barra)
        
    }
}

function corAleatoria(ordem){
    const cores = ["#1F271B", "#642C00", "#645500", "#406400", "#0C5101", "#01512E", "#014451", "#011951", "#120151", "#440151" ,"#1F271B"]
    return cores[ordem]
}

//===================================================================================
let botao = document.getElementById('botao');
botao.addEventListener('click', function(){

    let container = document.getElementById('container-barras');
    container.innerText = "";

    let quantidadeDados = document.getElementById('quantidade').value;

    let lista = contaDados(quantidadeDados);

    criaBarra(lista);

});