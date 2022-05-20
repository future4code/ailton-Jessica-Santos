
// EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 
   
 
console.log( 'Boas vindas ao jogo de Blackjack!')

if(confirm("Quer iniciar uma nova rodada?")){
const cartajogador1 = comprarCarta()
const cartajogador2 = comprarCarta()
const carta1 = comprarCarta()
const carta2 = comprarCarta()

let pontuaçãoUsuario = cartajogador1.valor + cartajogador2.valor 
let pontuaçãoPc= carta1.valor + carta2.valor 

console.log (`"Usuário" -  "Cartas" - ${cartajogador1.texto}, ${cartajogador2.texto}, ${pontuaçãoUsuario}`)
console.log(`"Computador" - "Cartas" - ${carta1.texto}, ${carta2.texto}, ${pontuaçãoPc}` )

 if(pontuaçãoUsuario > pontuaçãoPc){
    console.log("O Usuário é o vencedor!")
 } else{
 if(pontuaçãoUsuario < pontuaçãoPc){
    console.log("O Computador é o vencedor!")
        } else{
        if(pontuaçãoUsuario === pontuaçãoPc){
            console.log("EMPATE")
           } }  }

        } else { 
   console.log("O jogo acabou")
}