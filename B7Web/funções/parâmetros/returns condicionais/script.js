function maiorDeIdade(idade) {
    if (idade >= 18) {
        return `Você é maior de idade: ${idade}`
    } else {
        return `Você è muito novinho: ${idade}`
    }
}

let idade = maiorDeIdade(0 + 12)
console.log(idade)