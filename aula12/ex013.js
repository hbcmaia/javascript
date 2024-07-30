var agora = new Date()
var diaSem = agora.getDay()
/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/

console.log(diaSem)

switch(diaSem) {
    case 0:
        console.log(`Domingo`)
        break
    case 1:
        console.log(`Segunda`)
        break    
    case 2:
        conseole.log(`Terça`)
        break
    case 3:
        conseole.log(`Quarta`)
        break
    case 4:
        conseole.log(`Quinta`)
        break
    case 5:
        conseole.log(`Sexta`)
        break
    case 6:
        conseole.log(`Sábado`)
        break
    default:
        console.log(`[ERROR] Dia invalido!`)                 
}