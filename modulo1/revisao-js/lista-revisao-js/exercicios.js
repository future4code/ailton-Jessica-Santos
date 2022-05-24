// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  //return array.length funcionou
}   


// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  //return array.reverse() funcionou
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  /*function compararNumeros(a, b) {

  return (a - b);
}
  return array.sort(compararNumeros)funcionou */ 
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
  /*let primeiroMaior = -Infinity
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
  return resultado* funcionou */
}


// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
 /*  const filme = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
  }

  return (`Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[]}.`)*/
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
 /*return {... pessoa,
nome:"ANÔNIMO"
} funcionou */
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
 /* const pessoasAut = pessoas.filter((autorizadas) =>{
   return autorizadas.altura>= 1.5 && autorizadas.idade >= 15 && autorizadas.idade < 60
     
  })
   return (pessoasAut) funcionou*/
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
 /* let arrayNaoPermitidos = []
  for(const valor of pessoas ){
if(valor.altura <1.5 || valor.idade <= 14|| valor.idade >= 60){
  arrayNaoPermitidos.push(valor)
}
  }
return arrayNaoPermitidos
funcionou*/  

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
/*
let soma = 0
let debito = 0
const arrayDeContas = contas.map((item) =>{
return item.compras
})
for (let i = 0; i < arrayDeContas.lenght; i++) {
  for(let j=0; j<arrayDeContas[i].lenght; j++) {
  soma += arrayDeContas[i][j]
}
arrayDeContas[i].push(soma)
soma=0
}
for(let i=0; i < contas.lenght; i++){
  debito - contas[i].compras.pop()
  contas[i].saldoTotal -= debito
  contas[i].compras=[]

}
return contas*/
}

// EXERCÍCIO 15A
/*function retornaArrayOrdenadoAlfabeticamente(consultas) {
consultas.sort(function(a,b) {

  return (a.nome < b.nome ? - 1 : a.nome> b.nome ? 1 : 0 );
})
  return consultas
  Funcionou*/
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
  /* let arrayDataSemBarra = [];
   for( const valor of consultas) {
arrayDataSemBarra
   }*/


}