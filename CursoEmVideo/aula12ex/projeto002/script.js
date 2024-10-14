function verificar() {
    const data = new Date();
    const ano = data.getFullYear();
    const fano = document.getElementById('txtano');
    const res = document.getElementById('res');
  
    if (fano.value.trim() === 'ano' || Number(fano.value) > ano) {
      window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
      window.alert('TUDO OK');
    }
  }
 
 
 
 
 
 
 
 
 /*  
    function verificar() {
        var data = new Date()
        var ano = data.getFullYear()
        var fano = document.getElementById('txtano')
        var res = document.getElementById('res')
        if (fano.value.length == 0 || Number(fano.value) > ano ) {
            window.alert('[ERRO] Verifique os dados e tente novamente!')
        } else {
            window.alert('TUDO OK')
        }
    }

*/