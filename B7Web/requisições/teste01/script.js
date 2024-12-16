// Promise = Promessa

function clicou() {
    fetch('https://jsonplaceholder.typicode.com/po2sts ').then((response) => {
        console.log(response.body)
        return response.json();
    })
    .then((json) =>{
        alert(`Titulo do primeiro post: ${json[0].title}`)
    })
    .catch((error)=>{
        alert('Deu problema ai mano , vê direito ae')
        console.log(error)
    })
    .finally(()=> {
        alert('Opa , finalmente acabou tudo!')
    })

}





document.querySelector('#botao').addEventListener('click' , clicou)