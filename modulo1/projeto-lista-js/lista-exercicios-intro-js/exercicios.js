// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
/*function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)

}*/

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
 let altura = prompt("Qual a altura do retangulo")
 let largura = prompt("Qual a largura do retangulo")
 const area = altura * largura
 console.log(area)
 return area
  
   }


  // EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
let anoAtual = prompt("Digite o ano em que estamos")
let anoDeNascimento = prompt("Digite o ano em que voce nasceu")
let resultado  = anoAtual - anoDeNascimento
console.log(resultado)
return resultado
 }

// EXERCÍCIO 03
function calculaIMC() {
  // implemente sua lógica aqui
let peso = prompt("Qual seu peso?") 
let altura = prompt("Qual sua altura? Somente os numeros")
let imc = peso / (altura * altura)
console.log(imc)
return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
let nome = prompt("Qual seu nome?")
let idade = prompt("Qual sua idade?")
let email = prompt("Qual seu email?")

const frase = "Meu nome é {nome}, tenho {idade} anos, e o meu email é {email}."
  
console.log (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

return frase
  }

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
let cor1 = prompt("Qual sua cor favorita?")
let cor2 = prompt("Me diga cor favorita?")
let cor3 = prompt("Só mais uma cor favorita?")
let array = [cor1, cor2, cor3]
console.log(array)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
 
    return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
 
console.log(custo,valorIngresso)
return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
return string1.length === string2.length 
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
const itemDaLista = array[0]
return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const itemDaLista = array[0]
  return array.pop()
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
const primeiroElemento = array[0]
const segundoElemento = array[array.length-1]
array[0] = segundoElemento
array[array.length-1] = primeiroElemento
return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
return string1.toLowerCase() === string2.toLowerCase()
}
// EXERCÍCIO 13
//function checaRenovacaoRG() {
  // implemente sua lógica aqui

//}

// EXERCÍCIO 14
//function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

//}

// EXERCÍCIO 15
//function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

//}