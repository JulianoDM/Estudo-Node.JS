const pegaArquivo = require('./index');
const validaCPF = require ('./valida-cpf');

const caminho = process.argv;

async function processaTextoCpf(caminhoDoArquivo){
    //resultado de pesquisa no terminal
    const resultado = await pegaArquivo(caminho[2]);
    if(caminho[3] === 'validar'){
        
        console.log('CPFs validados', await validaCPF(resultado));
    }
    else{
        console.log('Lista de CPFs', resultado);

    }
    
}

processaTextoCpf(caminho)