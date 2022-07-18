const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


function manejarErros(erro){
    throw new Error (erro.message);
}


async function checaStatus(arrayURLs){
    try{
        //Irá guardar nossos status code 
        const arrayStatus = await Promise
        .all(await arrayURLs
            .map(async url  => {
                const res = await fetch(url);
                return `${res.status} - ${res.statusText}`;
        }));
        return arrayStatus;

    } catch(erro){
        manejarErros(erro);
    }
}

function geraArrayURLs(arrayLinks){
    return arrayLinks.map(objetolink => Object.values(objetolink).join());
}

/*function geraArrayURLs(arrayLinks){
    return arrayLinks.map(function (objetolink) {
            return Object.values(objetolink).join();
        });
    
}*/

async function validaURLs(arrayLinks){
    const links = geraArrayURLs(arrayLinks);
    const statusLinks = await checaStatus(links);

    
    const resultados = arrayLinks.map((objeto, indice )=> ({ 
        ...objeto,
         status: statusLinks[indice] 
        } ))
    return resultados;
};  

module.exports = validaURLs;
