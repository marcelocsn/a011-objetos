const pokemon1 = {
    nome: "Bulbasaur",
    tipo: "Grama",
    nivel: 5
};

const pokemon2 = {...pokemon1}
pokemon2.nome = "Squirtle"
pokemon2.tipo = "Agua"

pokemon1.ataques = []

pokemon1.ataques.push({nome: "Investida",dano:40,tipo:"Normal",precisao:100})

pokemon2.ataques =[...pokemon1.ataques]

pokemon1.ataques.push({nome: "Folha de Navalha",dano:55,tipo:"Grama",precisao:100})

pokemon2.ataques.push({nome:"Jato de Agua",dano:40,tipo:"Agua",precisao:100})

console.log(" ")
console.log("Pokedex 1: ", pokemon1)
console.log("Pokedex 2: ", pokemon2)