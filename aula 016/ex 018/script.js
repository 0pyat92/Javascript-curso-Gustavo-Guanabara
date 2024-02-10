let num = document.getElementById('fnum')
let lista = document.getSelection('select#flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if (Number(n)>=1 && Number(n)<= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, 1) {
    if (l.indexOf(Number(n))!= -1) {
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        window.alert('tudo ok!')
    } else {
        window.alert('Valor invalido ou já encontrado na lista.')
    }
    
    
}