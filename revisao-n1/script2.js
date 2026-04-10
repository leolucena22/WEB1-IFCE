const numeros = [1, 2, 3, 4, 5]

const nums = numeros.map(num => num *2)

console.log("Números multiplicados por 2: ",nums)

const par = numeros.filter(num => num % 2 === 0)

console.log("Números pares: ", par)

const idade = [10, 20, 30, 40, 50]

const somaIdade = idade.reduce((idade, acumulador) => idade + acumulador, 0)

console.log("Soma de idades: ", somaIdade)
