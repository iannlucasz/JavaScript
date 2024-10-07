function contar() {
    let inicio = document.getElementById('txti');
    let fim = document.getElementById('txtf');
    let passo = document.getElementById('txtp');
    let res = document.getElementById('res')

    // Verificando se algum dos campos está vazio
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        //window.alert('[ERRO] Faltam dados!');
        res.innerHTML = 'IMPOSSIVEL CONTAR'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 1) {
            window.alert('Passo Invalido! Considere o passo 1')
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            for(let c = i ; c <= f; c += p) {
                res.innerHTML += `${c} , `
            }
        } else {
            //Contagem Regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} , `
            }
            
        }
        res.innerHTML += `${c} , `
 

    }
}
