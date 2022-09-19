const btnTijera = document.querySelector('#btnTijera');
const btnPapel = document.querySelector('#btnPapel');
const btnPiedra = document.querySelector('#btnPiedra');
let usuario = document.querySelector('#usuario');
const maquina = document.querySelector('#maquina');
const resultado = document.querySelector('#resultado');
const reiniciar = document.querySelector('#reiniciar');
const answer = document.querySelector('#answer');



let tijera;
let piedra;
let papel;

let scissons;
let rock;
let paper;
let pc;

btnTijera.addEventListener('click', iconImage);
btnPapel.addEventListener('click', iconImage2);
btnPiedra.addEventListener('click', iconImage3);
window.addEventListener('load', winFail);
reiniciar.addEventListener('click', reiniciarJuego);


function reiniciarJuego(){
  location.href = location.href;
}

function iconImage(){
  tijera = 3;
  if(tijera){
    usuario.src = "./assets/tijera.png";
  }
  RandomJuego();
}

function iconImage2(){
  papel = 2;
  if(papel){
    usuario.src = "./assets/papel.png";
  }
  RandomJuego()
}
function iconImage3(){
  piedra = 1;
  if(piedra){
    usuario.src = "./assets/piedra.png";;
  console.log(usuario);
  }
  RandomJuego();
}

function RandomJuego(){
  scissons = 0;
  rock = 1;
  paper = 2;
  pc = Math.floor(Math.random() * 3)
  if(pc == scissons){
    maquina.src = "./assets/tijera.png";
    winFail();
  }else if(pc == rock){
    maquina.src = "./assets/piedra.png";
    winFail();
  }else if(pc == paper){
    maquina.src = "./assets/papel.png";
    winFail();
  }

  answer.classList.toggle('inactive');
}

function winFail(){
  if(piedra == 1 && pc == rock){
    resultado.innerHTML = 'Empate';
  }
  if(piedra == 1 && pc == paper){
    resultado.innerHTML = 'Perdiste';
  }
  if(piedra == 1 && pc == scissons){
    resultado.innerHTML = 'Ganaste';
  }
  if(piedra == 1 && pc == scissons){
    resultado.innerHTML = 'Ganaste';
  }
  if(papel == 2 && pc == scissons){
    resultado.innerHTML = 'Perdiste';
  }
  if(papel == 2 && pc == rock){
    resultado.innerHTML = 'Ganaste';
  }
  if(papel == 2 && pc == paper){
    resultado.innerHTML = 'Empate';
  }
  if(tijera == 3 && pc == rock){
    resultado.innerHTML = 'Perdiste';
  }
  if(tijera == 3 && pc == paper){
    resultado.innerHTML = 'Ganaste';
  }
  if(tijera == 3 && pc == scissons){
    resultado.innerHTML = 'Empate';
  }
}
