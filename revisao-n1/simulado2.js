// Questão 1

const numeros = [1, 2, 3, 4]

const dobro = numeros.map(num => num * 2)
//console.log(`O dobro dos valores é: ${dobro}`)
console.log(dobro)

// Questão 2

const pessoas = [
  { nome: "Ana", idade: 20 },
  { nome: "João", idade: 25 },
  { nome: "Carlos", idade: 30 }
]

const nomes = pessoas.map(pessoa => pessoa.nome)

console.log(`Nome da das pessoas: ${nomes}`)

// Questão 3

const numeros2 = [10, 15, 20, 25, 30]
const numeroMaiores = numeros2.filter(num => num > 20)

console.log(`Números maiores que 20: ${numeroMaiores}`)

// Questão 4

const produtos = [
  { nome: "Mouse", preco: 50 },
  { nome: "Teclado", preco: 150 },
  { nome: "Monitor", preco: 800 }
]

const precoMaior = produtos.filter(produto => produto.preco > 100).map(produto => produto.nome)

console.log(`Os produtos que valor acima de 100 são: ${precoMaior}`)

// Questão 5

const numeros3 = [5, 10, 15]
const soma = numeros3.reduce((acc, num) => acc + num, 0)

console.log(`A soma dos valores do array é: ${soma}`)

// Questão 6

const carrinho = [
  { produto: "Camisa", preco: 50 },
  { produto: "Calça", preco: 100 },
  { produto: "Tênis", preco: 200 }
]

const valorTotal = carrinho.reduce((total, item) => total + item.preco, 0)

console.log(`O valor total dos produtos é: ${valorTotal}`)

// Questão 7

const numeros4 = [1, 2, 3, 4, 5, 6]

const numerosParesMult = numeros4.filter(num => num % 2 === 0).map(num => num * 2)

console.log(`Números pares multiplicados por 2 são:  ${numerosParesMult}`)

// Questão 8

const numeros5 = [10, 20, 30, 40, 50]

const somaMaiores25 = numeros5.filter(num => num > 25).reduce((soma, num) => soma + num, 0)

console.log(`A soma apenas do números maiores que 25 é: ${somaMaiores25}`)

// Questão 9
const palavras = ["maçã", "banana", "maçã", "laranja", "banana", "maçã"]

const contagem = palavras.reduce((contador, palavra) => {
  contador[palavra] = (contador[palavra] || 0) + 1
  return contador
}, {})

console.log(`Contagem de palavras: ${JSON.stringify(contagem)}`)

// Questão 10

const alunos = [
  { nome: "Ana", nota: 7 },
  { nome: "João", nota: 5 },
  { nome: "Carlos", nota: 8 },
  { nome: "Maria", nota: 4 }
]

const alunosAprovado = alunos.filter(aluno => aluno.nota >= 6)
const mediaAprovados = alunosAprovado.reduce((soma, aluno) => soma + aluno.nota, 0) / alunosAprovado.length
const nomesAprovados = alunosAprovado.map(aluno => aluno.nome)

console.log(`Alunos com nota ≥ 6: ${nomesAprovados}, Média: ${mediaAprovados.toFixed(2)}`)