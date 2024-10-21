function somar(n1=0 , n2=0){
    let numero1 = document.getElementById('txtnum1').value
    let numero2 = document.getElementById('txtnum2').value
    let resultado = Number(numero1) + Number(numero2) 
    alert(`O resultado das somas é : ${resultado} `)
}

somar(Number(numero1) , Number(numero2))