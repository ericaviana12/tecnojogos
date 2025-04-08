// Caminho: tecnojogos/jogos/hexa-click/script.js
const hexCode = document.getElementById("hex-code");
const botoes = document.querySelectorAll(".cor");

function gerarCorHex() {
  const letras = "0123456789ABCDEF";
  let cor = "#";
  for (let i = 0; i < 6; i++) {
    cor += letras[Math.floor(Math.random() * 16)];
  }
  return cor;
}

function iniciarRodada() {
  const corCorreta = gerarCorHex();
  hexCode.textContent = corCorreta;

  const opcoes = [corCorreta];
  while (opcoes.length < 4) {
    const nova = gerarCorHex();
    if (!opcoes.includes(nova)) opcoes.push(nova);
  }

  opcoes.sort(() => Math.random() - 0.5);

  botoes.forEach((botao, i) => {
    botao.style.backgroundColor = opcoes[i];
    botao.onclick = () => {
      if (opcoes[i] === corCorreta) {
        alert("Acertou!");
        iniciarRodada();
      } else {
        alert("Tente novamente!");
      }
    };
  });
}

iniciarRodada();
