// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

// Menu contato
let contato = document.getElementsByClassName('menu-lista-link menu-lista-contato')[0]
    contato.addEventListener('click', function(){
    ga('send', 'event', 'menu', 'entre_em_contato', 'link_externo');
});

// Menu Download
let download = document.getElementsByClassName('menu-lista-link menu-lista-download')[0]
    download.addEventListener('click', function(){
    ga('send', 'event', 'menu', 'download_pdf', 'download_pdf');
}); 

// Botões Análise
for (let i = 0; i < botoes.length; i++) {
    let botao = botoes[i];
    botao.addEventListener('click', function (){
        ga('send', 'event', 'analise', 'ver_mais', botao.getAttribute("data-name"))
    });
}

// Formulário
let campoNome = document.getElementById('nome');
campoNome.addEventListener('change', function() {
    ga('send', 'event', 'contato', 'nome', 'preencheu')
});

let campoEmail = document.getElementById('email');
campoEmail.addEventListener('change', function() {
    ga('send', 'event', 'contato', 'email', 'preencheu')
});

let campoTelefone = document.getElementById('telefone');
campoTelefone.addEventListener('change', function() {
    ga('send', 'event', 'contato', 'telefone', 'preencheu')
});

let campoAceito = document.getElementById('aceito');
campoAceito.addEventListener('change', function() {
    ga('send', 'event', 'contato', 'aceito', 'preencheu')
});

let submit = document.getElementsByTagName('button')[0];
submit.addEventListener('click', function() {
   ga('send', 'event', 'contato', 'enviado', 'enviado');
});
