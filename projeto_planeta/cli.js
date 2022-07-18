const exibePlanetaTemperatura = require ('./scripts/descPlanetas.js');
const {testaDistanciaDoSol, planetas} = require ('./scripts/sistemaSolar.js');
const c = require ('ansi-colors');

const pesquisa = process.argv;


if (pesquisa[2] == 'psol'|| pesquisa[2] =='dsol'){
    console.log(testaDistanciaDoSol(planetas))
} 
else if(pesquisa[2] === 'help'){
    let instrucao = ` ====================\n Comandos: \n psol: planetas próximos dos sol \n dsol: planetas distantes do sol \n Podemos escolher para pesquisar mais sobre um desses planetas também:\n ${c.green(planetas)} \n Basta digitar seu nome\n ====================`
    console.log(instrucao)

} 
else if(planetas.includes(pesquisa[2])){
    console.log(exibePlanetaTemperatura(pesquisa[2]))
} 
else{
    console.log(`"${pesquisa[2]}" Não é um planeta. `+'Pesquise um planeta válido, exemplo: \n' + `${c.green(planetas)} \n\nSe precisar de ajuda digite "help" no código`);

}
    

    




    


