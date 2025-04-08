// Caminho: tecnojogos/jogos/monte-seu-pc/script.js
const pecas = document.querySelectorAll(".peca");
const slots = document.querySelectorAll(".slot");
const feedback = document.getElementById("feedback");

pecas.forEach(peca => {
  peca.addEventListener("dragstart", e => {
    e.dataTransfer.setData("text/plain", peca.id);
  });
});

slots.forEach(slot => {
  slot.addEventListener("dragover", e => {
    e.preventDefault();
  });

  slot.addEventListener("drop", e => {
    e.preventDefault();
    const idPeca = e.dataTransfer.getData("text/plain");
    if (slot.dataset.correto === idPeca) {
      slot.textContent = document.getElementById(idPeca).textContent;
      slot.style.backgroundColor = "#c8f7c5";
      feedback.textContent = "Peça correta!";
      feedback.style.color = "green";
      document.getElementById(idPeca).style.display = "none";
    } else {
      feedback.textContent = "Essa peça não pertence a esse slot!";
      feedback.style.color = "red";
    }
  });
});
