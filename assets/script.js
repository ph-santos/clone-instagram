let image = document.getElementById('second-image')

const trocaImagem = (() => {
    if (image.style.opacity == 1) {
        image.style.opacity = 0

    } else {
        image.style.opacity = 1
    }
    

})

setInterval (() => {
    trocaImagem()

}, 4000) // O setInterval é chamado de tempos em tempos esse tempo você configura entre a ultima chave e o ultimo parenteses, nesse caso nós colocamos 3 milisegundos que é 3 segundos.