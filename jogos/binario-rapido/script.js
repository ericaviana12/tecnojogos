// Caminho: tecnojogos/jogos/binario-rapido/script.js
const decimalEl = document.getElementById("decimal-number");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");

let currentDecimal = 0;

function gerarNumeroAleatorio(max = 255) {
  return Math.floor(Math.random() * (max + 1));
}

function decimalParaBinario8Bits(num) {
  return num.toString(2).padStart(8, "0");
}

function gerarAlternativas(correta) {
  const alternativas = new Set();
  alternativas.add(correta);

  while (alternativas.size < 4) {
    const fake = decimalParaBinario8Bits(gerarNumeroAleatorio());
    alternativas.add(fake);
  }

  return Array.from(alternativas).sort(() => Math.random() - 0.5);
}

function novaRodada() {
  feedbackEl.textContent = "";
  currentDecimal = gerarNumeroAleatorio();
  const correta = decimalParaBinario8Bits(currentDecimal);
  const alternativas = gerarAlternativas(correta);

  decimalEl.textContent = currentDecimal;
  optionsEl.innerHTML = "";

  alternativas.forEach(opcao => {
    const btn = document.createElement("button");
    btn.textContent = opcao;
    btn.className = "option-btn";
    btn.onclick = () => verificarResposta(opcao, correta);
    optionsEl.appendChild(btn);
  });
}

function verificarResposta(resposta, correta) {
  if (resposta === correta) {
    feedbackEl.textContent = "Correto!";
    feedbackEl.style.color = "lightgreen";
  } else {
    feedbackEl.textContent = "Incorreto. Tente novamente!";
    feedbackEl.style.color = "tomato";
  }
}

nextBtn.onclick = novaRodada;
novaRodada();
