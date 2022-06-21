const fs = require('fs')

console.log("inicio")

fs.writeFile("artigo.txt", "oi", function(err) {
    setTimeout(function(){
        console.log("Arquivo Criado!");
    }, 1000)
})

console.log('Fim')