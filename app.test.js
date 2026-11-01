// Funções centrais da aplicação para teste
const money = value => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

function validarBusca(termo) {
  return typeof termo === 'string' && termo.trim().length > 0;
}

function calcularSubtotal(itens) {
  return itens.reduce((acc, item) => acc + (item.price * item.quantity), 0);
}

describe('Testes Automatizados - Cookiera', () => {
  test('Formatação de preço para Real (BRL)', () => {
    const valorFormatado = money(12.9).replace(/\s/g, ' ');
    expect(valorFormatado).toMatch(/R\$\s?12,90/);
  });

  test('Validação de busca rejeita termos vazios', () => {
    expect(validarBusca('')).toBe(false);
    expect(validarBusca('   ')).toBe(false);
  });

  test('Cálculo correto do subtotal do carrinho', () => {
    const carrinho = [
      { price: 12.9, quantity: 2 },
      { price: 15.9, quantity: 1 }
    ];
    expect(calcularSubtotal(carrinho)).toBe(41.7);
  });
});