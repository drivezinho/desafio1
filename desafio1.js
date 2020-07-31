const readline = require('readline-sync');

class TrainComposition { 
    constructor(){
        this.vagao = [5]
        this.l = 5
        this.r = 5
    } 
    
    AdcVagaoR(){
        this.r++
        this.vagao.push(this.r)
    }

    AdcVagaoL(){
        this.l--
        this.vagao.unshift(this.l)
    }

    RmvVagaoL(){
        this.l++
        this.vagao.shift(this.l)
    }

    RmvVagaoR(){
        this.r--
        this.vagao.pop(this.r)
    }

    Msgs(){

        while (exit = 1){
            console.log("-----------------------------------")
            console.log("Trem Iterativo - Opções de Escolha")
            console.log("-----------------------------------")
            console.log("1 - para adicionar vagão pela esquerda")
            console.log("2 - para adicionar vagão pela direita")
            console.log("3 - para remover um vagao pela esquerda")
            console.log("4 - para remover um vagao pela direita")
            
            const opcao = readline.question("Escolha um numero acima: ")
            this.Menu(opcao)
            console.log(this.vagao)
        }
    }

    Menu(opcao){
        
        switch (opcao){
            case "1":
                this.AdcVagaoL()
                break
            case "2":
                this.AdcVagaoR()
                break
            case "3":
                this.RmvVagaoL()
                break
            case "4":
                this.RmvVagaoR()
                break
        }
    }
}
module.exports = TrainComposition;