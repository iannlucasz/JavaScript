let nascimento = document.querySelector('#nascimento')
let calcular = document.querySelector('#calcular')
let resultado = document.querySelector('#resultado')

// Botao
calcular.addEventListener('click' , () =>{
    calcularIdade()
})

// function
function calcularIdade() {
    let dataNascimento = new Date(nascimento.value)

    if (isNaN(dataNascimento)) {
        alert('Por favor, insira uma data valida')
        return
    }

    let hoje = new Date()
    let idade = hoje.getFullYear() - dataNascimento.getFullYear()
    let mes = hoje.getMonth() - dataNascimento.getMonth()
    let dia = hoje.getDate() - dataNascimento.getDate()

    if(mes < 0 || mes === 0 & dia < 0) {
        idade--
    }

    resultado.innerHTML = `Você tem ${idade} anos`

}