
function verificar() {
    let nascimento = document.getElementById('txtano').value
    let anoAtual = 2024
    let anoNascimento = Number(nascimento)
    let idade = anoAtual - anoNascimento
    let resultado = document.getElementById('resultado')
    if (idade >= 18) {
        resultado.innerHTML = 'Resultado : Pode sim! Você pode votar'
    } else {
        resultado.innerHTML = 'Resultado : Pode não ! Infelizmente'
    }
}