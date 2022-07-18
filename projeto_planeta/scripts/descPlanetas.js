const c = require ('ansi-colors')

const planetas = ['Mercúrio', 'Vênus', 'Terra', 'Marte', 'Júpiter', 'Saturno', 'Urano', 'Netuno']

const temperaturas = [550, 460, 15, -10, -100, -140, -200, -218]

let planetasTemperaturas = [planetas, temperaturas]



const exibePlanetaTemperatura = (descPlaneta) =>{
    if (planetasTemperaturas[0].includes(descPlaneta)){
        indice = planetasTemperaturas[0].indexOf(descPlaneta)
        if(indice <= 2){
            return c.red('====================') + `\nEste é o Planeta ${c.red(planetasTemperaturas[0][indice])}, é o ${indice + 1}° planeta do sistema solar mais próximo do sol e sua temperatura é de ` + c.red(planetasTemperaturas [1][indice] + '° graus\n====================')
        }
        else{
            return c.blueBright('====================')+`\nEste é o Planeta ${c.blueBright(planetasTemperaturas[0][indice])}, é o ${indice + 1}° planeta do sistema solar mais distante do sol e sua temperatura é de ` + c.blueBright(planetasTemperaturas [1][indice] + '° graus\n====================')
        }   
    }
}



module.exports = exibePlanetaTemperatura;






