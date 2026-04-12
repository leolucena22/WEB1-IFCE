// 1 - Letra C - 180px
// 2 - Letra C - Push
// 3 - Letra B - document.getElementById()
// 4 - Letra C - <h1>
// 5 - Letra A - JSON.stringify()

// 6 
const btn = document.getElementById("btn")

btn.addEventListener("click", () => {
  alert("Botão clicado!");
})

// 7 - O == em javascript é um operador de comparação que verifica se os valores são iguais, ignorando o tipo de dado. Já o === é um operador de comparação estrita que verifica se os valores são iguais e do mesmo tipo de dado. Por exemplo:

console.log(5 == "5") // true, porque os valores são iguais, mesmo sendo de tipos diferentes
console.log(5 === "5") // false, porque os valores são iguais, mas os tipos são diferentes

// 8 - O atributo "alt" em uma tag de imagem é usado para fornecer uma descrição alternativa da imagem, que é exibida caso a imagem não possa ser carregada ou para leitores de tela usados por pessoas com deficiência visual. Ele é importante para a acessibilidade e para melhorar a experiência do usuário. Por exemplo:

// 9 - A diferença entre localstorage e sessionstorage e cookies é que o localstorage e sessionstorage são usados para armazenar dados no navegador, enquanto os cookies são usados para armazenar dados no servidor. O localstorage armazena dados de forma persistente, ou seja, mesmo após fechar o navegador, enquanto o sessionstorage armazena dados apenas durante a sessão atual do navegador. Já os cookies têm um tempo de expiração definido e podem ser acessados tanto pelo cliente quanto pelo servidor.

// 10 
const numeros = [2, 4, 6]

const triplo = numeros.map(num => num * 3)

console.log("Números multiplicados por 3: ", triplo)

// 11 - A diferença entre display: block, display: inline e display: inline-block é que o display: block faz com que o elemento ocupe toda a largura disponível e comece em uma nova linha, enquanto o display: inline faz com que o elemento ocupe apenas a largura necessária e fique na mesma linha. Já o display: inline-block combina as características dos dois anteriores, permitindo que o elemento ocupe apenas a largura necessária, mas ainda assim possa ter margens e padding como um elemento block.

// 12 - Letra b - justify-content

// 13 - A diferença é que a primeira função é uma função tradicional, enquanto a segunda é uma função de seta (arrow function). As funções de seta têm uma sintaxe mais curta e não possuem seu próprio contexto de "this", o que pode ser útil em algumas situações. Por exemplo:

// Função tradicional
function soma(a, b) {
  return a + b;
}

// Função de seta
const somaArrow = (a, b) => a + b;

// 14 - Letra A - O required é um atributo HTML usado em elementos de formulário para indicar que o campo é obrigatório e deve ser preenchido antes de enviar o formulário. Ele impede que o formulário seja enviado se o campo estiver vazio, garantindo que os usuários forneçam as informações necessárias.

// 15 - A media query com a propriedade "max-width: 600px" é usada para aplicar estilos CSS específicos quando a largura da tela do dispositivo é igual ou menor que 600 pixels. Isso é útil para criar designs responsivos que se adaptam a diferentes tamanhos de tela, como em dispositivos móveis. Por exemplo:

