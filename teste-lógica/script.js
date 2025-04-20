// Olá chat , irei codar algumas aleátorias e voce avalia

const nome = " Iann"
const idade = "16"
const cidadeLocal = "São Gonçalo, Rj"

console.log(`Olá meu nome é ${nome} , tenho atualmente ${idade} anos de idade e moro em ${cidadeLocal}`)



function verificarIdade(idade) {
    if (idade >= 18){
    return " Maior de idade lindão"
} else {
    return "Menor de idade paizão pode não kkkk"
}
}

console.log((verificarIdade(45)))



let megaSena = [21 , 24 , 33 , 41 , 48 , 54]

console.log(`Os números que eu joguei na megasena foram esses ${megaSena}. Será que eu ganhei ?`)
