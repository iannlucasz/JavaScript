function enviar() {
    const name = document.querySelector('#idname').value
    const dateBirth = document.querySelector('#iddate').value
    const text = document.querySelector('#idmsg').value

    alert(`Nome Completo : ${name}`)
    alert(`Data de Nascimento: ${dateBirth}`)
    alert(`Mensagem: ${text}`)
}