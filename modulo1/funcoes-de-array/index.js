/*const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB)*/

// Exercícios de interpretação de código
//1- Vai ser impresso o nome e o apelido informado.
//2-Apenas os nomes.
//3-Somente as informações diferentes da Chijo.

//Exercícios de escrita de código
//a) Crie um novo array que contenha apenas o nome dos doguinhos

/*const novoArray = pets.map((item, index, array) => {
return item.nome
})
console.log(novoArray) */

//b) Crie um novo array apenas com os [cachorros salsicha]

/*const dogssalsichas = pets.filter ((index, item, array) => {
    return index.raca === 'Salsicha'})
    
    console.log(dogssalsichas) */
    
//c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"
/*const mensagemCliente = pets.filter ((index) => {
return index.raca === 'Poodle'}).map((item) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`
})
console.log(mensagemCliente)*/

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 //a) 
/*const novoArrayB = produtos.map((item, index, array) => {
     return item.nome

}  
  console.log(novoArrayB)*/
//b) 

const desconto = produtos.map((item) => {
    return {nome: item.nome, preco: (item.preco * 0.95)}
})
console.log(desconto)

//c) 
/*const bebidas = produtos.filter ((index, item, array) => {
    return index.categoria === 'Bebidas'})
    
    console.log(bebidas)*/ 
//d) 

/*const nomeYpe = produtos.filter ((index,item, array) => {
    return index.nome.includes("Ypê")})
    
    console.log(nomeYpe)*/

//e) 
/*
const novoArrayA = produtos.filter((item, index, array) => {
    console.log(`Compre ${item.nome} por ${item.preco}`)
 })
*/
//DESAFIO

/*const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]*/
 //A-

 
//console.log(pokemons.sort())
    

 //B-
 /*const semRepetir = pokemons.filter((pokemons)=>{
   return pokemons.tipo === 'fogo'
    })
 console.log(semRepetir)

const pokemon2 = pokemons.filter((pokemons)=>{
    return pokemons.tipo === 'grama'

})
 console.log(pokemon2)
 
 const pokemon3 = pokemons.filter((pokemons)=>{
    return pokemons.tipo === 'água'

})
 console.log(pokemon3)*/


