const vagao = [5]
let l = 5
let r = 5
function AdcVagaoR(){
    r++
    var adicionar = vagao.push(r)
    console.log(vagao)
}

function AdcVagaoL(){
    l--
    var adicionar = vagao.unshift(l)
    console.log(vagao)
}

function RmvVagaoL(){
    l++
    var remover = vagao.shift(l)
    console.log(vagao)
}

function RmvVagaoR(){
    r--
    var remover = vagao.pop(r)
    console.log(vagao)
}

function Main(){
   msgs()
}


function msgs(){

    const readline = require('readline-sync');
    while (exit = 1){
        console.log("Trem Iterativo - Opções de Escolha")
        console.log("-----------------------------------")
        console.log("1 - para adicionar vagão pela esquerda")
        console.log("2 - para adicionar vagão pela direita")
        console.log("3 - para remover um vagao pela esquerda")
        console.log("4 - para remover um vagao pela direita")
        const opcao = readline.question("Escolha um numero acima: ")
        Menu(opcao)
    }
}

function Menu(opcao){
    
    switch (opcao){
        case "1":
            AdcVagaoL()
            break
        case "2":
            AdcVagaoR()
            break
        case "3":
            RmvVagaoL()
            break
        case "4":
            RmvVagaoR()
            break
    }
}

Main()
