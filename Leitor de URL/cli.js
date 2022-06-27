const pegaArquivo = require ('./index');
const chalk = require ('chalk');
const validaURLs = require ('./http-validacao');

const caminho = process.argv;

async function processaTexto(caminhoDeArquivo){
    const resultado = await pegaArquivo(caminhoDeArquivo[2]);
    if(caminho[3] === 'validar'){
        console.log(chalk.yellow('Links validados'), await validaURLs(resultado))
    }
    else{
        console.log(chalk.yellow('lista de links'), resultado);
    }
    
    
}


processaTexto(caminho);