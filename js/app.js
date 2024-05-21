let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    if(amigo.value == ''){
        alert('Por favor insira um nome para realizar o sorteio');
        return;
    }
    let lista = document.getElementById('lista-amigos');
    if(amigos.includes(amigo.value)){
        alert('Este nome já foi inserido');
        amigo.value='';
        return;
    }
    amigos.push(amigo.value);
    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }    
    amigo.value='';
}

function sortear(){
    if(amigos.length<4){
        alert('Por favor insira pelo menos 4 nomes para sortear!');
        return;
    }
    
    let sorteio = document.getElementById('lista-sorteio');
    embaralha(amigos);
    for(i=0;i<amigos.length;i++){
        if(i==amigos.length-1){
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[0] + '<br>'; 
        }else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[i+1] + '<br>'; 

        }
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    document.getElementById('lista-sorteio').textContent='';
    amigos = [];
    document.getElementById('lista-amigos').textContent='';
}