function manejaErros(erro){
    throw new Error(erro.message);
}

function geraArrayCPF (arrayCPFs){
    return arrayCPFs.map(objetoCPFs => Object.values(objetoCPFs).join());
}

async function validaCpf(arrayCPFs){
    try{
        return resultado = geraArrayCPF(arrayCPFs);

    }
    catch(erro){
        manejaErros(erro);

    }

}

module.exports = geraArrayCPF;
module.exports = validaCpf;

