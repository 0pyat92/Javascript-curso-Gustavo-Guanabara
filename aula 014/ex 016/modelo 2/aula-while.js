function contar(){
    let Ini = document.getElementById('txtI')
    let Fim = document.getElementById('txtF')
    let Passo = document.getElementById('txtP')
    if(Ini.value.length == 0 || Fim.value.length == 0 || Passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossivel contar!'
    } else {
        res.innerHTML = 'Contando:<br> '
        let i = Number(Ini.value)
        let f = Number(Fim.value)
        let p = Number(Passo.value)
        if(p<=0){
            window.alert('0 é passo invalido! Considerando passo 1')
            p=1
        }
        if(i < f ){
            for(let c = i; c <= f; c += p) {
                res.innerHTML +=  ` ${c} \u{1F449} `
            }
    
           
        } else {
            for(let c = i; c >= f; c -= p) {
                res.innerHTML +=  ` ${c} \u{1F449} `
            }
        }
       res.innerHTML += `\u{1F3c1}`
    }


}