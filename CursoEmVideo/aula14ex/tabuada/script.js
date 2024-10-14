    function tabuada() {
        let num = document.getElementById('txtn') // variavel do input:number 
        let tab = document.getElementById('seltab') // variavel do select

        
        if (num.value.length == 0) {
            window.alert('[ERRO]')
            
        } else {
            let n =Number(num.value)
            let c = 1
            tab.innerHTML = ""
            while (c <= 10 ) {
                let item = document.createElement('option')
                item.text = `${n} X ${c} = ${n*c}`
                item.value = `tab${c}`
                tab.appendChild(item)
                c++
            }
        }
    }