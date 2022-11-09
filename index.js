let rojo = document.getElementById('autoRojo')
let azul = document.getElementById('autoAzul')

let suma1 = 0
let suma2 = 0

document.addEventListener('keydown', function(info){
    if(info.key === 'w') {
        suma1+= 4
        rojo.style.marginLeft = suma1 + 'px'
    } else if (info.key === 's') {
        suma2+= 4
        azul.style.marginLeft = suma2 + 'px' 
    }
})