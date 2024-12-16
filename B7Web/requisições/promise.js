const pedirPizza = new Promise((resolve , reject) =>{
    const pizzaChegou = false;
    if (pizzaChegou){
        resolve('A pizza chegou finalmente!')
    } else {
        reject('Roubaram a nossa pizzakkkkk')
    }
})


pedirPizza
.then((message) =>{
    console.log(message)
})
.catch((erro) =>{
    console.log(erro)
})

