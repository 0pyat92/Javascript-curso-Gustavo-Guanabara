function verificar() {
    const data = new Date()
    const ano = data.getFullYear()
    const fano = document.getElementById('txtano')
    const res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        const idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >= 0 && idade < 1){
                //bb
                img.setAttribute('src', 'img/0hanos.jpg')
            } else if(idade < 5) {
                //criança 1
                img.setAttribute('src', 'img/5hanos.jpg')
            } else if (idade < 10) {
                //criança 2
            } else if (idade < 20) {
                //jovem
                img.setAttribute('src', 'img/20hanos.jpg')
            } else if (idade < 30){
                //adulto
                img.setAttribute('src','img/30hanos.jpg')
            } else if (idade < 40) {
                //adulto 2
                img.setAttribute('src', 'img/40hanos.jpg')
            } else if (idade < 50) {
                //velho
                img.setAttribute('src', 'img/50h.manos.jpg')
            } else if( idade < 60){
                //idoso
                img.setAttribute('src','img/60hanos.jpg')
            }
          } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 1) {
                //bebê
                img.setAttribute('src', 'img/0hanos.jpg')

            } else if (idade < 5) {
                //criança 1
            } else if (idade < 10) {
                //criança 2
                img.setAttribute('src', 'img/10manos.jpg')
            } else if (idade<15){
                //adolecente
                img.setAttribute('src', 'img/15manos.jpg')
            } else if (idade < 20) {
                //jovem
            } else if (idade < 30) {
                //adulto
            } else if (idade < 40) {
                //adulto 2
            } else if (idade < 50) {
                //velho
                img.setAttribute('src', 'img/50h.manos.jpg')

            } else if( idade < 60){
                //idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}