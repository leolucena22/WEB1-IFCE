const produtos = [
  { nome: 'Laptop', preco: 4500, categoria: 'Eletrônicos' },
  { nome: 'Teclado', preco: 200, categoria: 'Eletrônicos' },
  { nome: 'Cadeira Gamer', preco: 1200, categoria: 'Móveis' },
  { nome: 'Monitor', preco: 800, categoria: 'Eletrônicos' },
  { nome: 'Mesa', preco: 900, categoria: 'Móveis' }
];

// ForEach: Exibir o nome de cada produto
console.log('Uso do ForEach:');
produtos.forEach(produto => {
  console.log(`Produto: ${produto.nome}`);
})

// Map: Criar um array com os preços dos produtos
console.log('\nUso do Map:');
const nomesMaiusculos = produtos.map(produto => produto.nome.toUpperCase());
console.log(nomesMaiusculos);

const precosComDesconto = produtos.map(produto => ({
  ...produto,
  preco: produto.preco * 0.9 // Aplicando um desconto de 10%
}));
console.log(precosComDesconto);

// Filter: Filtrar os produtos que são da categoria 'Eletrônicos'
console.log('\nUso do Filter:');
const eletronicos = produtos.filter(produto => produto.categoria === 'Eletrônicos');
console.log(eletronicos);

// Reduce: Calcular o valor total dos produtos
console.log('\nUso do Reduce:');
const valorTotal = produtos.reduce((total, produto) => total + produto.preco, 0);
console.log(`Valor total dos produtos: R$ ${valorTotal.toFixed(2)}`);

// Find: Encontrar o primeiro produto com preço maior que 1000
console.log('\nUso do Find:');
const teclado = produtos.find(produto => produto.nome === 'Teclado');
console.log(teclado);

// Uso do stringify 
const carrinho = [
    { id: 101, produto: "Teclado Mecânico", preco: 250 },
    { id: 102, produto: "Mouse Gamer", preco: 150 }
];

// 1. Transformamos o array/objeto em STRING
const carrinhoTexto = JSON.stringify(carrinho);

// 2. Agora o navegador aceita guardar na "gaveta"
localStorage.setItem('meuCarrinho', carrinhoTexto);

console.log("Dados salvos como texto!");

// Uso do JSON parse
// 1. Pegamos o texto que estava guardado
const textoDoLocalStorage = localStorage.getItem('meuCarrinho');

// 2. Se houver algo lá, transformamos de volta em OBJETO
if (textoDoLocalStorage) {
    const carrinhoRecuperado = JSON.parse(textoDoLocalStorage);
    
    // Agora podemos usar métodos de array normalmente!
    carrinhoRecuperado.forEach(item => {
        console.log(`Recuperado: ${item.produto} - R$ ${item.preco}`);
    });
}