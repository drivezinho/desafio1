const readline = require('readline-sync');

class Less{

    constructor () {
        this.lista = []
    }

    DescoMenor(numero){
        let numerico = parseInt(numero)
        const qntMenor = []

        for (let exit = 0; exit <= 5; exit++){
            if (numerico > this.lista[exit]){
                qntMenor.unshift(1)
            }
        }
        return qntMenor.length
    }

    OrdenaCres(lista){
        lista.sort()
        return lista
    }

    AdcNumero(numero){
        let numerico = parseInt(numero)
        this.lista.unshift(numerico)
    }

    CountNumbers(){

        for (let exit = 1; exit <= 5; exit++){
            console.log("-----------------------------------")
            console.log("Descobrindo o menor numero")
            console.log("Digite um numero cinco vezes")
            console.log("-----------------------------------")
            console.log(this.lista)
            const numero = readline.question("Digite um numero: ")
            this.AdcNumero(numero)
        }

        console.log("-----------------------------------")
        console.log("Ordenada de forma crescente", this.OrdenaCres(this.lista))
        console.log("-----------------------------------")
        console.log("Descubra quantos numeros são menores")

        const numero = readline.question("Digite um numero: ")

        console.log("-----------------------------------")
        console.log(this.DescoMenor(numero), "são menores")
        console.log("-----------------------------------")
    }
}
module.exports = Less;