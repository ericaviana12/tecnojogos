// Caminho: tecnojogos/jogos/binario-rapido/script.js
const numeroDecimal = document.getElementById("numeroDecimal");
const opcoes = document.getElementById("opcoes");
const resultado = document.getElementById("resultado");

let numeroAtual = 0;

function gerarNumeroDecimal() {
  return Math.floor(Math.random() * 16); // 0 a 15
}

function decimalParaBinario(n) {
  return n.toString(2).padStart(4, "0");
}

function gerarOpcoes(correto) {
  const opcoesSet = new Set([decimalParaBinario(correto)]);
  while (opcoesSet.size < 4) {
    const falso = gerarNumeroDecimal();
    opcoesSet.add(decimalParaBinario(falso));
  }

  return Array.from(opcoesSet).sort(() => Math.random() - 0.5);
}

function mostrarRodada() {
  numeroAtual = gerarNumeroDecimal();
  numeroDecimal.textContent = `Decimal: ${numeroAtual}`;

  const respostas = gerarOpcoes(numeroAtual);
  opcoes.innerHTML = "";

  respostas.forEach(bin => {
    const btn = document.createElement("button");
    btn.textContent = bin;
    btn.onclick = () => verificarResposta(bin);
    opcoes.appendChild(btn);
  });

  resultado.textContent = "";
}

function verificarResposta(resposta) {
  const binCorreto = decimalParaBinario(numeroAtual);
  if (resposta === binCorreto) {
    resultado.textContent = "Correto!";
    resultado.style.color = "green";
  } else {
    resultado.textContent = `Errado! Resposta correta: ${binCorreto}`;
    resultado.style.color = "red";
  }
}

function proximaRodada() {
  mostrarRodada();
}

mostrarRodada();
