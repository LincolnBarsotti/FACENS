var convidados = [];

function adicionar() {
    let convidado = document.getElementById('convidado').value;

    if (convidado != '') {
        convidados.push(convidado);
        document.getElementById("convidado").value = '';
        console.log(convidado);

        let ul = document.getElementById("ulConvidado");
        let li = document.createElement("li");
        li.innerHTML = convidado;
        ul.appendChild(li);
    }
}

function limpar(){
    let li = document.getElementById("ulConvidado").innerHTML = "";
    convidados = [];    
}