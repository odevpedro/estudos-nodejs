const x = 10
const y = "Pedro"
const z = [1,2]

console.log(x, y, z)

//contagem de impressões, quantas vezes um resultado foi executad

console.count(`O valor de x é: ${x}, contagem: `)
console.count(`O valor de x é: ${x}, contagem: `)
console.count(`O valor de x é: ${x}, contagem: `)

//variaveis entre String
console.log("O nome é %s, ele é programador", y)


//limpar o comsole
setTimeout(() =>{
    console.clear()
}, 4000)