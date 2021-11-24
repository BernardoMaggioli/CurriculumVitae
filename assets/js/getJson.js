//sobre
var sobre = document.getElementById("sobre");
var nome = document.getElementById("nome");
var idade = document.getElementById("idade");
var profissao = document.getElementById("profissao");
var email = document.getElementById("email");
var telemovel = document.getElementById("telemovel");
//Educação
var Educacao = document.getElementById("Educacao");

//skills
var habilidades = document.getElementById("habilidades");
//trabalhos
var containerTrabalho = document.getElementById("containerTrabalho");
var containerTrabalho2 = document.getElementById("containerTrabalho2");
var containerTrabalho3 = document.getElementById("containerTrabalho3");

async function getjson() {
    const response = await fetch("./curriculum.json");
    var dados = await response.json();
    console.log(dados);
    show(dados);
}

getjson();
function show(dados) {
    //sobre
    telemovel.innerHTML = dados.sobre.telemovel;
    email.innerHTML = dados.sobre.email;
    nome.innerHTML = dados.sobre.nome;
    idade.innerHTML = dados.sobre.idade;
    profissao.innerHTML = dados.sobre.profissao;
    sobre.innerText = dados.sobre.desc;
    //educação
    for (i of dados.educacao) {
        containerEducacao.insertAdjacentHTML('beforeend', '<div class="card"> <div class="row"><div class="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500"><div class="card-body cc-education-header"><p>' + i.startDate + '-' + i.endDate + '</p><p>' + i.curso + '</p><p> ' + i.grauEnsino + ' </p><div class="h5"></div></div></div><p>' + "Sou estudante na " + i.instituicao + " no curso de " + i.curso + '</p></div></div>');
    }
    //competências
    for (j of dados.competencias) {
        listarHabilidades.insertAdjacentHTML('beforeend', '<li>' + j.nome + '</li>');
    }
    console.log(Object.keys(dados.projetos).length);
    containerTrabalho.insertAdjacentHTML('beforeend','<div class="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"> <a href="#web-development"> <figure class="cc-effect"><img src="'+ dados.projetos[0].imgURL +'" alt="Imagem" /> <figcaption> <div class="h4">'+ dados.projetos[0].nome+ '</div> <p>'+ dados.projetos[0].desc+'</p> </figcaption> </figure> </a></div>');
        containerTrabalho2.insertAdjacentHTML('beforeend','<div class="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"> <a href="#web-development"> <figure class="cc-effect"><img src="'+ dados.projetos[1].imgURL+'" alt="Imagem" /> <figcaption> <div class="h4">'+ dados.projetos[1].nome+ '</div> <p>'+ dados.projetos[1].desc+'</p> </figcaption> </figure> </a></div>');
        containerTrabalho.insertAdjacentHTML('beforeend','<div class="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"> <a href="#web-development"> <figure class="cc-effect"><img src="'+ dados.projetos[2].imgURL +'" alt="Imagem" /> <figcaption> <div class="h4">'+ dados.projetos[2].nome+ '</div> <p>'+ dados.projetos[2].desc+'</p> </figcaption> </figure> </a></div>');
        containerTrabalho2.insertAdjacentHTML('beforeend','<div class="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"> <a href="#web-development"> <figure class="cc-effect"><img src="'+ dados.projetos[3].imgURL+'" alt="Imagem" /> <figcaption> <div class="h4">'+ dados.projetos[3].nome+ '</div> <p>'+ dados.projetos[3].desc+'</p> </figcaption> </figure> </a></div>');
        containerTrabalho3.insertAdjacentHTML('beforeend','<div class="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"> <a href="#web-development"> <figure class="cc-effect"><img src="'+ dados.projetos[4].imgURL+'" alt="Imagem" /> <figcaption> <div class="h4">'+ dados.projetos[4].nome+ '</div> <p>'+ dados.projetos[4].desc+'</p> </figcaption> </figure> </a></div>');
}