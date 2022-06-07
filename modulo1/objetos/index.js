//Exercícios de interpretação de código
//1-
/*const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])*/

//a= Será impresso: Matheus Nachtergaele,Virginia Cavendish e  Globo,14h.
//2-
/*const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

//a-nome: Juca, idade:3 e raça SRD. 
//gato: nome Juba, idade:3, raça: SRD. 
//tartaruga: nome:Jubo, idade: 3, raça: SRD. 
//b-clona as informações da variavel.

//3-
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))*/

//a-false, sem definição;
//b-Como não tinha nenhum comando com o nome altura, não tinha como dar um resultado. 

//Exercícios de escrita de código
//1-a
/*const pessoa = {
nome: 'Laura',
apelidos: ['Laurinha', 'Lala', 'Lalinha']
}
function objeto(obj){

console.log(`Eu sou ${obj.nome}, mas pode me chamar de: ${obj.apelidos}.`);
}

objeto(pessoa)
//b-
function transforma (obj) {
const pessoa2 = {
...pessoa,
apelidos: [`gordinha`, `neguinha`, `amor`]
}
console.log(`Eu sou a ${pessoa2.nome}, mas pode me chamar de: ${pessoa2.apelidos}. `);
}
transforma (pessoa)*/

//2-a-

const pessoa1 = {
nome: "Julia",
idade: 35,
profissão: "Maquiadora"

}

const pessoa2 = {
nome: "Mario",
idade: 45,
profissão: "Piloto"
}

/*function pessoas(pessoa) {
	let array= []
	array.push(pessoa.nome)
	array.push(pessoa.nome.length)
	array.push(pessoa.idade)
	array.push(pessoa.profissão)
	array.push(pessoa.profissão.length)
	return array
}*/
//pessoas(pessoa)
//console.log(pessoa1, pessoa2)

function pessoas(pessoa) {
	const array = pessoa;
	console.log(`["${array.nome}", ${array.nome.length}, ${array.idade}, "${array.profissão}", ${array.profissão.length}]`)
	}
pessoas (pessoa1)
pessoas (pessoa2)

//3-a-
//const carrinho [0]{
 



