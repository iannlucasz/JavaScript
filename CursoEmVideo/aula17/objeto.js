let amigo = {name: 'Pedro' , age: 16 , gener: 'Homem' , engordar(p){
    console.log('Engordou')
    this.peso += p
}}
amigo.engordar(40)
console.log(`${amigo.name} tem ${amigo.age} e é ${amigo.gener} `)