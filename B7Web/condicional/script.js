function testar() {
    let numero = document.getElementById('txtnum').value
    
    if (Number(numero) >= 18) {
        window.alert('Você é maior de idade')
    } else {
        window.alert('Você é muito novinho ainda')
    }

}
