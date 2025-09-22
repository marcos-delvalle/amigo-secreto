// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    if (nombre == ''){
        alert("Por favor ingrese un nombre válido")
        return
    } else{
        amigos.push(nombre)
        document.getElementById('amigo').value = "";
        mostrarNombres()
    }
}

function mostrarNombres(){
    let lista = document.getElementById('listaAmigos')
    lista.innerHTML = "";
    amigos.forEach(nombreAmigo => {
        let elementoLista = document.createElement('li');
        elementoLista.textContent = nombreAmigo;
        lista.appendChild(elementoLista);
    });
}

function sortearAmigo(){
    let numeroRandom = Math.random() * amigos.length;
    let numeroIndice = Math.floor(numeroRandom);
    let ganador = amigos[numeroIndice];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ganador;
}