var nome = window.document.getElementById('nome')
var email = document.querySelector('#email')
var assunto = document.querySelector('#assunto')
var nomeOK = false
var emailOK = false
var assuntoOK = false
var mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validarNome() {
    let TxtNome = document.querySelector('#TxtNome')
    if (nome.value.length < 2) {
        TxtNome.innerHTML = 'Nome inválido!'
        TxtNome.style.color = 'red'
        nomeOK = false
    }else{
        TxtNome.innerHTML = 'Nome válido!'
        TxtNome.style.color = 'green'
        nomeOK = true
    }
}

function validarEmail() {
 let TxtEmail = document.querySelector('#TxtEmail')
 if(email.value.indexOf('@') > 0 && email.value.indexOf('.') > 0){
    TxtEmail.innerHTML = 'email válido'
     TxtEmail.style.color = 'green'
    emailOK =true
 } else{
     TxtEmail.innerHTML = 'email inválido'
     TxtEmail.style.color = 'red'
    emailOK= false
 }  

}
function validarAssunto(){
let TxtAssunto = document.querySelector('#TxtAssunto')
    if(assunto.value.length >=100){
        TxtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
    TxtAssunto.style.color = 'red'
    TxtAssunto.style.display = 'black' 
    }else{
    TxtAssunto.style.display = 'none' 
    assuntoOK = true
    }
}

function Enviar(){
if(nomeOK ==true && emailOK==true && assuntoOK==true){
    alert('preenchido corretamente, enviado!!')

    }else{
        alert('preencha o campo corretamente')
    }
}

function mapaZoom(){
mapa.style.width = '800px'
mapa.style.height = '600px'
}

function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'

}