
var jogador = null;
var jogadorSelecionado = document.getElementById(
  'jogador-selecionado');

mudarJogador("x");

function escolherQuadrado(id) {

  var quadrado = document.getElementById(id);
  if(quadrado.innerHTML !== "-"){
    return;
  }
  quadrado.innerHTML = jogador;
  quadrado.style.color = "#000";

  if (jogador === "x") {
    jogador = "O";
  } else {
    jogador = "x";
  }
  mudarJogador(jogador);

}

function mudarJogador(valor) {
  jogador = valor;
  jogadorSelecionado, innerHTML = jogador;
}

function checaVencedor(){
  
}