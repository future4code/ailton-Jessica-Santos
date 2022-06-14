// Exercícios de interpretação de código
//1-
/*const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado)*/

//1- false(negativo com negativo ) 2- false (negativo com posisitivo) 
//3-true4( como tem o operador OU tornou a operação positiva) -Boolean (O numero é uma string)

//2-
/*let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)*/
//Como ele não transformou o string em number o resultado é a junção dos numeros e não a soma.
//3-

/*const primeiroNumero = Number (prompt("Digite um numero!"))
const segundoNumero = Number (prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(primeiroNumero + segundoNumero)*/

//Exercícios de escrita de código
//1-

/*let idadeUsuario = Number(prompt("Qual a sua idade?"))
let idadeAmigo = Number(prompt("Quantos anos tem o seu amigo?"))
let comparando1 = idadeUsuario > idadeAmigo 
console.log ("Sua idade é maior que a do seu melhor amigo?", comparando1)

let comparando2 = idadeUsuario < idadeAmigo
console.log ("Sua idade é maior que a do seu melhor amigo?", comparando2) 

let diferença = idadeUsuario - idadeAmigo
console.log("Qual a diferença entre a idade de vocês?", diferença )*/

//2-
/*let numeroPar = Number(prompt("Digite um número par!"))
let numeroImpar = 3
const resultado = numeroPar % numeroImpar
console.log (resultado)/3*/
// Sim tanto par ou impar o numero segue o mesmo padrão.

//3-
/*let suaIdade = Number(prompt('Informe a sua idade!'))
let meses = 12
const resultado = suaIdade * meses
console.log(resultado)*/

/*let suaIdade = Number(prompt('Informe a sua idade!'))
let meses = 12
let dias = 365
const resultado = suaIdade * dias / meses 
console.log(resultado)*/

/*let suaIdade = Number(prompt('Informe a sua idade!'))
let meses = 12
let dias = 365
let horas = 24
const resultado = suaIdade * dias / meses * horas
console.log(resultado)

4-*/

/*let primeiroNumero1 = Number(prompt("Insira um numero"))
let segundoNumero2 = Number(prompt("Insira outro numero"))
const resultado = primeiroNumero1 > segundoNumero2
console.log (resultado)*/

/*let primeiroNumero1 = Number(prompt("Insira um numero"))
let segundoNumero2 = Number(prompt("Insira outro numero"))
const resultado = primeiroNumero1 === segundoNumero2
console.log (resultado)*/

/*let primeiroNumero1 = prompt("Insira um numero")
let segundoNumero2 = prompt("Insira outro numero")
const resultado = primeiroNumero1 % segundoNumero2 ===0 
console.log (resultado)*/ 

let primeiroNumero1 = prompt("Insira um numero")
let segundoNumero2 = prompt("Insira outro numero")
const resultado = segundoNumero2 % primeiroNumero1 ===0 
console.log (resultado)
