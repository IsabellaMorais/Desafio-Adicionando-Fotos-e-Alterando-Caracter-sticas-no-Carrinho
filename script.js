// Função para calcular o preço total de um produto com base na quantidade
function atualizarTotal() {
    let totais = document.querySelectorAll('.preco-total');  // Seleciona todas as células de preço total
    let totalFinal = 0;

    totais.forEach(function(precoTotal) {
        let precoUnitario = parseFloat(precoTotal.previousElementSibling.textContent.replace('R$ ', '').replace(',', '.'));
        let quantidade = parseInt(precoTotal.previousElementSibling.previousElementSibling.querySelector('input').value, 10);
        precoTotal.textContent = `R$ ${(precoUnitario * quantidade).toFixed(2)}`;  // Atualiza o preço total do produto

        totalFinal += precoUnitario * quantidade;  // Atualiza o total final
    });

    // Atualiza o valor total final na parte inferior
    document.getElementById('total-final').textContent = `R$ ${totalFinal.toFixed(2)}`;
}

// Função para remover o produto
function removerProduto(event) {
    const row = event.target.closest('tr');  // Seleciona a linha do produto clicado
    row.remove();  // Remove a linha da tabela

    atualizarTotal();  // Recalcula o preço total após remoção
}

// Adiciona evento de "alterar quantidade" para os inputs
document.querySelectorAll('.quantidade').forEach(function(input) {
    input.addEventListener('input', atualizarTotal);  // Atualiza o total sempre que a quantidade mudar
});

// Adiciona eventos de "remover produto" aos botões
document.querySelectorAll('.remover-produto').forEach(function(button) {
    button.addEventListener('click', removerProduto);  // Atualiza a tabela ao remover o produto
});

// Chama a função de atualização total inicial quando a página for carregada
window.addEventListener('load', atualizarTotal);
