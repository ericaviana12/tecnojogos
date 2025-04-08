// Caminho: tecnojogos/jogos/codigo-rgb/script.js
const corAlvoDiv = document.getElementById("cor-alvo");
const corAtualDiv = document.getElementById("cor-atual");
const r = document.getElementById("r");
const g = document.getElementById("g");
const b = document.getElementById("b");

let alvo = { r: 0, g: 0, b: 0 };

function gerarCorAlvo() {
  alvo.r = Math.floor(Math.random() * 256);
  alvo.g = Math.floor(Math.random() * 256);
  alvo.b = Math.floor(Math.random() * 256);
  corAlvoDiv.style.backgroundColor = `rgb(${alvo.r}, ${alvo.g}, ${alvo.b})`;
}

function atualizarCorAtual() {
  const atual = `rgb(${r.value}, ${g.value}, ${b.value})`;
  corAtualDiv.style.backgroundColor = atual;
}

function verificarCor() {
  const diff = Math.abs(alvo.r - r.value) + Math.abs(alvo.g - g.value) + Math.abs(alvo.b - b.value);
  if (diff < 30) {
    alert("Parabéns! Você acertou a cor!");
    gerarCorAlvo();
  } else {
    alert("Ainda não está igual! Continue ajustando.");
  }
}

[r, g, b].forEach(slider => slider.addEventListener("input", atualizarCorAtual));

gerarCorAlvo();
atualizarCorAtual();
