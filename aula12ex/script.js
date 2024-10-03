function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12 ) {
        img.src = 'images/fotomanha.jpg'
        document.body.style.background = '#858559'
        cumprimento.innerHTML = "<strong>Bom Dia!</strong>"

    } else if (hora >= 12 && hora < 18) {
        img.src = 'images/fototarde.jpg'
        document.body.style.background = '#FEC49C'
        cumprimento.innerHTML = "<strong>Boa Tarde!</strong>"


    } else {
        img.src = 'images/fotonoite.jpg'
        document.body.style.background = '#192238'
        cumprimento.innerHTML = "<strong>Boa Noite!</strong>"
        
    }
}


