let carros = [" Ferrari F40LM , Skyline R34 , M4 COMPETITION , Fusca Bumblebee"]  // os valores
carros.push(' R35') // forma de adicionar um valor na variavel
console.log(`Os carros do estacionamento são ${carros}`)

                                                                            // MINHA VERSÃO 
for (let pos in carros) {  // método for in 
    console.log(`A vaga ${pos} tem o ${carros[pos]}`)
}   



/*   Versao CHATGPT

let carros = ["Ferrari F40LM", "Skyline R34", "M4 COMPETITION", "Fusca Bumblebee"];
carros.push("R35");

console.log(`Os carros do estacionamento são: ${carros.join(', ')}`);

for (let pos in carros) {
    console.log(`A vaga ${parseInt(pos) + 1} tem o carro: ${carros[pos]}`);
}


/*
let num = [5, 8, 2, 9, 3]
console.log(`O vetor tem ${num.length} posições`)
console.log(num)



let pos = num.indexOf(10)

if (pos == -1) {
    console.log('Numero não achado')
}
console.log(pos)

*/