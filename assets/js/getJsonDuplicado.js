
var sobre = document.getElementById("sobre");
var nome = document.getElementById("nome");
var idade = document.getElementById("idade");
var profissao = document.getElementById("profissao");
var email = document.getElementById("email");
var telemovel = document.getElementById("telemovel");


var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://localhost/BernardoMaggioliCV/curriculum.json');
ourRequest.onload = function(){
    if (ourRequest.status >= 200 && ourRequest.status < 400){

        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    } else {
        console.log("Connection failed");
    }
    
};

ourRequest.onerror = function(){
    console.log("connection error");
}

ourRequest.send();

function renderHTML(data){
    sobre.innerText = data.sobre.desc;
    nome.innerHTML = data.sobre.nome;
    profissao.innerHTML = data.sobre.profissao;
    //idade.innerHTML = data.sobre.idade;
    //email.innerHTML = data.sobre.email;




}