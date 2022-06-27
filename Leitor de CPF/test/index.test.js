const validaCpf = require('../valida-cpf');
const pegaArquivo = require('../index');

const arrayResultado = [
    '517.782.226-98,Maria Joaquina'
]

describe('pegaArquivo::', () =>{
    it('Deve ser uma função', () => {
        expect(typeof pegaArquivo).toBe('function');
    });
});
//Projeto um pouco mais complicado mesmo utilizando o conhecimento do projeto anterior, então 
//serviu de estudo para fixar melhor algumas ideias que estavam mais ofuscadas.