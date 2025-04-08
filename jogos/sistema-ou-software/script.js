// Caminho: tecnojogos/jogos/sistema-ou-software/script.js
const categorias = {
    windows: "sistema",
    linux: "sistema",
    teclado: "hardware",
    mouse: "hardware",
    photoshop: "software",
    navegador: "software"
  };
  
  const itens = document.querySelectorAll(".item");
  const caixas = document.querySelectorAll(".categoria");
  const mensagem = document.getElementById("mensagem");
  
  itens.forEach(item => {
    item.addEventListener("dragstart", e => {
      e.dataTransfer.setData("text/plain", item.id);
    });
  });
  
  caixas.forEach(caixa => {
    caixa.addEventListener("dragover", e => e.preventDefault());
  
    caixa.addEventListener("drop", e => {
      e.preventDefault();
      const id = e.dataTransfer.getData("text/plain");
      const item = document.getElementById(id);
      const categoriaCerta = categorias[id];
  
      if (caixa.dataset.categoria === categoriaCerta) {
        caixa.appendChild(item);
        item.style.backgroundColor = "#d4edda";
        mensagem.textContent = "Correto!";
        mensagem.style.color = "green";
      } else {
        mensagem.textContent = "Categoria incorreta!";
        mensagem.style.color = "red";
      }
    });
  });
  