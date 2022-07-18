const c = require ('ansi-colors')

const planetas = ['Mercúrio', 'Vênus', 'Terra', 'Marte', 'Júpiter', 'Saturno', 'Urano', 'Netuno']

const temperatura = [550, 460, 15, -10, -100, -140, -200, -218]


const testa  = process.argv

function testaDistanciaDoSol (listaDePlanetas){
    //psol = Proximo do sol
    if(testa[2] === 'psol'){
        const maisProximosDoSol = listaDePlanetas.slice(0,planetas.length/2);
        return c.red(maisProximosDoSol);
    }
    //dsol = Mais distantes do sol
    else if(testa[2] === 'dsol' ){
        const maisDistanteDoSol = listaDePlanetas.slice(planetas.length/2);
        return  c.blueBright(maisDistanteDoSol);
    }
}





module.exports = {testaDistanciaDoSol, planetas};








