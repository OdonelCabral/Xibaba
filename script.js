
document.addEventListener("DOMContentLoaded", () => {
  fetch("produtos/exemplo-produtos.json")
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById("produtos-container");
      data.forEach(produto => {
        const div = document.createElement("div");
        div.className = "produto";
        div.innerHTML = `
          <img src="imagens/placeholder.jpg" alt="${produto.nome}">
          <h2>${produto.nome}</h2>
          <p>Preço: ${produto.preco}</p>
        `;
        container.appendChild(div);
      });
    });
});
