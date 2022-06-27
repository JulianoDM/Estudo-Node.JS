/* 1 ponto indica o local atual, dois pontos se retrocede para fora do local de origem
por isso então usamos dois pontos, pois nosso arquivo está em uma pasta fora da pasta de testes*/
const pegaArquivo = require('../index')

const arrayResultado = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

describe('pegaArquivo::', () =>{
    it('Deve ser uma função', () => {
        expect(typeof pegaArquivo).toBe('function');
    });
    /*O retorno de resultado é async porque precisa esperar consultar no texto!  */
    it('Deve retornar array com resultados', async () =>{
        const resultado = await pegaArquivo('C:/Users/Juliano Dias/Desktop/projeto/markdown/test/arquivos/texto1.md')
        /*Utiliza-se o toEqual quando queremos checar o valor de um objeto */
        expect (resultado).toEqual(arrayResultado);
    });
    it('Deve retornar mensagem "Não há links"', async () =>{
        const resultado = await pegaArquivo('C:/Users/Juliano Dias/Desktop/projeto/markdown/test/arquivos/texto_semlink.md')
        expect (resultado).toBe('Não há links');

    })
    //toThrow serve para testar se determinada função lança um erro quando é chamada.
    it('deve lançar um erro na falta de arquivo', async () => {
        await expect(pegaArquivo('C:/Users/Juliano Dias/Desktop/projeto/markdown/test/arquivos/texto_semlink')).rejects.toThrow("Não há arquivo no caminho")
      })

});


