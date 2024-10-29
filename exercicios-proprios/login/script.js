function verificar(usuarioCerto , senhaCerto) {
    let usuario = document.getElementById('txtusu').value 
    let senha = document.getElementById('txtsenha').value
    let resultado = document.getElementById('resultado')
    if (usuarioCerto == usuario && senhaCerto == senha) {
         window.open('https://youtu.be/ivCY3Ec4iaU?si=eILlxF6EyBjp8tVv&t=30' , '_blank')
    } else {
        resultado.innerHTML = 'Acesso Negado! Verifique seu usuário e senha'
    }
}

const usuarioCerto = 'Iann'
const senhaCerto = 'amominhafamilia'
