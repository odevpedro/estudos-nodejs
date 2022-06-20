//Lendo arquivo
const fs = require('fs') // File system

fs.readFile('arquivo.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log(data)
    }

    //escrevendo arquivo
    const content = 'Some Content'
    fs.writeFile('someTextFile.txt', content, err => {

        if (err) {
            console.error(err)
        }
    })

    //Criando nova pasta
    const folderName = 'dir';

    try {
        if (!fs.existsSync(folderName)) {
            fs.mkdirSync(folderName)
        }

    } catch (err) {
        console.error(err)
    }

    //Renomeando Pasta
    fs.rename('newFolder', 'novaPasta', err => {
        if(err){
            console.error(err);
        }
    })

    //Removendo pasta
    fs.rmdir('dir', { recursive: true }, err => {
        if (err) {
            throw err;
        }

        console.log(`${'dir'} is deleted!`);
    });

})