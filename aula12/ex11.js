var idade = 71
console.log(`você tem ${idade} anos.`)
if (idade < 16) {
    console.log(`NÃO VOTA`)
} else if (idade < 18 || idade > 70) {
    console.log (`Voto opcional`)
}else{
    console.log(`Voto obrigatório`)
}