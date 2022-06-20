import chalk from 'chalk'
const nota = 0


if(nota >= 7){
    console.log(chalk.green("Você passou na prova"))
} else {
    console.log(chalk.bgRed.black.bold("Você não passou na prova"))
}