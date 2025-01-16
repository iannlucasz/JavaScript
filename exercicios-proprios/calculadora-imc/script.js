let altura = document.querySelector('#altura')
let peso = document.querySelector('#peso')
let calcular = document.querySelector('#calcular')
let resultado = document.querySelector('#resultado')

// Botao 
calcular.addEventListener('click' , () => {
    validacao()
})

// Verificação + Calculadora
function validacao() {
    // Valores
    let alturaValor = parseFloat(altura.value)
    let pesoValor = parseFloat(peso.value)

    // Validacao

    if (isNaN(alturaValor) || isNaN(pesoValor)){
    alert('Por favor , preencha todos os campos!')
    return
} else if (alturaValor <= 0 || pesoValor <= 0) {
    alert('Por favor , digite as informações corretamente!')
    return
}
// Calculadora 
    let imc = pesoValor / (alturaValor * alturaValor)
    let classificacao = 'Abaixo do Peso'
    if (imc < 18.5) {
        classificacao = "Abaixo do Peso"
    } else if (imc < 24.9) {
        classificacao = "Peso Normal" 
    } else if (imc < 29.9) {
        classificacao = "Sobrepeso"
    } else {
        classificacao = "Obesidade"
    }

    resultado.innerHTML = `Seu IMC é <strong>${imc.toFixed(2)}</strong> (${classificacao}).`;

}


