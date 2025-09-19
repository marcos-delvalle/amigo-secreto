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
    //console.log("mostrando desde la funcion", amigos)
    let lista = document.getElementById('listaAmigos')
    lista.innerHTML = "";
    amigos.forEach(nombreAmigo => {
        let elementoLista = document.createElement('li');
        elementoLista.textContent = nombreAmigo;
        lista.appendChild(elementoLista);
    });
}

