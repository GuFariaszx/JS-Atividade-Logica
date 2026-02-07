// // Verificar maioridade:

// let idade  = prompt("Digite sua idade: ")

// if (idade >= 18 ) {
//     alert("Você é maior de idade.")
// } else {
//     alert("Você é menor de idade.")
// }


// // Verificar se um número é par ou ímpar:

// const number = Number(prompt("Digite um número: "))

// if (number % 2 == 0) {
//     alert(number + " é um número par")
// } else if (number % 2 != 0) {
//     alert(number + " é um número ímpar")
// } else {
//     alert(number + " é neutro")
// }


// // Aprovação em uma prova:

// const nota = Number(prompt("Insira sua nota de 0 a 100: "))

// if (nota > 100) {
//     alert("Por favor insira sua nota dentre 0 a 100 como foi pedido!")
// } else if (nota >= 60) {
//     alert("Sua nota foi " + nota + " portanto ( Aprovado )")
// } else if (nota >= 0) {
//     alert("Sua nota foi " + nota + " portanto ( Reprovado )")
// } else {
//     alert(" Insira sua nota dentre 0 a 100!")
// }


// // Verificar se um número é positivo, negativo ou zero:

// const num = Number(prompt("Digite um número para decidir se é positivo, negativo ou neutro"))

// if (num > 0) {
//     alert(num + " é um número positivo")
// } else if (num < 0) {
//     alert(num + " é um número negativo")
// } else {
//     alert(num + " é um número neutro")
// }


// // INTERMEDIÁRIO

// // Calculadora Simples

// const num1 = Number(prompt("Digite um número: "))
// const num2 = Number(prompt("Digite um segundo número: "))
// const ope = String(prompt("Digite a operação desejada ( +, -, *, / ): "))

// if (Number.isNaN(num1) || Number.isNaN(num2)) {
//     alert("Erro! Digite apenas números válidos")
// } else if (ope === "+") {
//     resultado = num1 + num2
//     alert("Resultado da Soma: " + resultado)
// } else if (ope === "-") {
//     resultado = num1 - num2
//     alert("Resultado da Subtração: " + resultado)
// } else if (ope === "*") {
//     resultado = num1 * num2
//     alert("Resultado da Multiplicação: " + resultado)
// } else if (ope === "/") {
//     resultado = num1 / num2
//     alert("Resultado da Soma: " + resultado)
// } else {
//     alert("Erro: Operação inválida")
// }


// // NÍVEL AVANÇADO 

// // Classificação de triângulos
// const l1 = Number(prompt("Digite o primeiro lado do triângulo: "))
// const l2 = Number(prompt("Digite o segundo lado do triângulo: "))
// const l3 = Number(prompt("Digite o terceiro lado do triângulo: "))

// if (l1 == l2 && l2 == l3 && l1 == l3) {
//     alert("Seu triângulo é esquilátero, pois todos os lados são iguais!")
// } else if (l1 != l2 && l2 != l3 && l1!= l3) {
//     alert("Seu triângulo é escaleno, pois todos os lados são diferentes!")
// } else {
//     alert("Seu triângulo é isóceles, pois dois lados são iguais!")
// }


// // Conversão de notas 

// const nota1 = Number(prompt("Digite sua nota de 0 a 100: "))

// if (90 <= nota1 <= 100) {
//     alert("Sua nota é A (" + nota1 + ")")
// } else if (80 <= nota1 <= 89) {
//     alert("Sua nota é B (" + nota1 + ")")
// } else if (70 <= nota1 <= 79) {
//     alert("Sua nota é C (" + nota1 + ")")
// } else if (60 <= nota1 <= 69) {
//     alert("Sua nota é D (" + nota1 + ")")
// } else if (nota1 > 100) {
//     alert("Erro: Nota acima de 100, coloque entre 0 e 100")
// } else if (nota1 < 0) {
//     alert("Erro: Nota abaixo de 0, coloque entre 0 e 100")
// } else {
//     alert("Sua nota é F (" + nota1 + ")")
// }


// // IMC

// const peso = Number(prompt("Digite seu peso: "))
// const altura = Number(prompt("Digite sua altura "))
// const imc = peso / altura ** 2

// if (18.5 <= imc <= 24.5) {
//     alert("Seu IMC está saudável ( " + imc + " )")
// } else if (imc > 24.5) {
//     alert("Seu IMC está acima do peso ( " + imc + " )")
// } else {
//     alert("Seu IMC está abaixo do peso ( " + imc + " )")
// }


// // Ano bissexto 

// const ano = Number(prompt("Digite um ano: "))

// if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
//     alert(ano + " é um ano bissexto")
// } else {
//     alert(ano + " não é um ano bissexto")
// }
