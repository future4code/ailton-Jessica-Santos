//Exercícios de interpretação de código

/*let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

//Imprimiu o valor 10, mas não faço ideia de como esse valor surgiu. 

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}
// Vai ser impresso todos os numeros maiores de 18. Sim, criar um contador e utilizar: contador < lista[1]
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}*/
//Foi impresso  4 linnhas de asterisco e cada linha aumentava um.
//Exercícios de escrita de código

//1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
    /*const quantidadeDeAnimais = Number(prompt("Digite quantos animais de estimação você tem"))
    let resposta = []
    let animais = 0
        if (quantidadeDeAnimais !=0){
    while(animais !== quantidadeDeAnimais){
      animais = animais + 1
     nomeAnimal = prompt("Digite o nome do seu animal") 
     resposta.push(nomeAnimal)
          }
      }else {
        console.log ("Que pena! Mas você pode adotar um pet.")
      }
  console.log(resposta)*/
// 2-
  const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

  //a-
  /*for (let numero of arrayOriginal){
    console.log(numero)
    }*/
   //b-

/*let divisao = () =>{
for(i=0; i<arrayOriginal.length; i++){
  arrayOriginal[i]= arrayOriginal[i]/10 }
return arrayOriginal
   }
console.log(divisao())
c-*/
/*const acharPar = () =>{
let par = []
for(i=0;i<arrayOriginal.length;i++){
 if (arrayOriginal[i] %2===0){
par.push(arrayOriginal[i])} }
return par
}
console.log(acharPar())*/


//d-
/*const arraystring = () =>{
  for(i=0; i<arrayOriginal.length; i++){
    arrayOriginal[i]= `O elemento do índex ${i} é ${arrayOriginal}`
 } 
 return arrayOriginal
  }
  console.log(arraystring())*/

    //e-
    const maiorMenor = () =>{
      let maior = 0
      let menor = Math.min(...arrayOriginal)      
      for(i=0; i<arrayOriginal.length; i++){
        const elemento1 =arrayOriginal[i]
        if(elemento1 > maior){
          maior = elemento1
        }
        const elemento2 = arrayOriginal[i]
        if (elemento2 < menor){
          menor = elemento2
        }
        console.log(maior)
        console.log(menor)
      }
    }
      console.log(`O maior número é ${maior} e o menor é ${menor}`)