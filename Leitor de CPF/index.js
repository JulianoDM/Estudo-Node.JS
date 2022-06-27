const fs = require('fs');
const c = require('ansi-colors');
const { text } = require('stream/consumers');

function trataErro(erro){
    throw new Error(c.red(`${erro.code, 'Não há arquivo no caminho'}`));
}

function extrairCPFs(texto){
  //Expressão regulara para capturar chave CPF, número e nome 
    const regex = /\[([^\]]*)\]\(([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})\)\(([^\)0-9]*)\)/gm;
    //Os resultados da leitura do array são inseridos aqui para serem armazenados
    const arrayResultados = [];
    //Variável temporária que irá ler o objeto, caso seja diferente de nulo irá ler o próximo
    let temp;
    while((temp = regex.exec(texto)) !== null){
        //Estamos criando um objeto com o .push indicando os indices que devem ser lidos e exibidos
        arrayResultados.push({[temp[1]]: temp[2], nome: temp[3]})
    }
                  //true  ?                //false :
    return arrayResultados.length === 0 ? c.red('Não a CPFs para ler') : arrayResultados;
    //se a leitura do retorno for = 0 'Não a CPFs' se for != 0 retorna o resultado.
}

async function pegaArquivo(caminhoDoArquivo) {
    //utf-8 para ler textos
    const encoding = 'utf-8';
    try {
      const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
      return extrairCPFs(texto);
    } catch(erro) {
      trataErro(erro);
    }
  }

//pegaArquivo('./registros/cpf.md');

module.exports = pegaArquivo;


