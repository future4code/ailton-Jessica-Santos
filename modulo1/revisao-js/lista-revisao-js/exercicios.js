// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  //return array.length
}   


// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  //return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  /*function compararNumeros(a, b) {

  return (a - b);
}
  return array.sort(compararNumeros)*/
}
// EXERCÍCIO 04
function retornaNumerosPares(array) {
 
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  let primeiroMaior = -Infinity
  let segundoMaior = -Infinity
  let primeiroMenor = +Infinity
  let segundoMenor = +Infinity
  for(let number of array){
    if (number > primeiroMaior)
    {primeiroMaior = number
    }if (number < primeiroMenor){
      primeiroMenor = number
    }
      }
for (let number of array){
  if(number> segundoMaior && number !== primeiroMaior){
    segundoMaior = number
  } if (number<segundoMenor && number !== primeiroMenor){
segundoMenor = number
  }
  }
  const resultado = [segundoMaior, segundoMenor]
  return resultado
}


// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
 /*return {... pessoa,
nome:"ANÔNIMO"
}  */
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
 /* const pessoasAut = pessoas.filter((autorizadas) =>{
   return autorizadas.altura>= 1.5 && autorizadas.idade >= 15 && autorizadas.idade < 60
     
  })
   return (pessoasAut)*/
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
   const pessoasInv = pessoas.filter ((itens) => {
return itens.idade <= 14 && itens.idade > 60 && itens.altura < 150

   }) 
   return pessoasInv
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
//  const ordem = consultas.sort()
function compararNumeros(a, b) {

  return (a - b);
}
  return array.sort(compararNumeros)
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}