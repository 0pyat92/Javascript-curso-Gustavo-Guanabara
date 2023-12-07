function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 19  
    msg.innerHTML = `Agora são ${hora} horas.` 
    if (hora >= 0 && hora < 12) { 
        //Bom dia!
        img.src ='img/manha.jpeg'
        document.body.style.background = 'black'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde!
        img.src = 'img/tarde.jpeg'
        document.body.style.background = 'green'
    } else {
        //Boa noite!
        img.src = 'img/noite.jpeg'
        document.body.style.background = 'red'
    } 
}