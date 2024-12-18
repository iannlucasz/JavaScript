// Promise = Promessa

function clicou() {
    // GET , POST , PUT , DELETE 
    fetch('https://jsonplaceholder.typicode.com/posts ').then((response) => {
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

function inserir() {
    fetch(
        'https://jsonplaceholder.typicode.com/posts' , 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'Titulo de Teste',
                body: 'Corpo do teste',
                userId: 2
            })
        }
    )
    .then((response) =>{
        return response.json();
    })
    .then((json) =>{
        console.log(json);
    })
}





document.querySelector('#botao').addEventListener('click' , clicou)
document.querySelector('#inserir').addEventListener('click' , inserir)