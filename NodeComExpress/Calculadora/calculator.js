const express = require ('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));


app.get("/", function(request, response){
    /*__dirname indica onde o arquivo está independente de sua localização, pensando em projetos em núvem onde não sabemos exatamente onde nosso arquivo está para indicar.*/
    /*Podemos colocar o comando em um console.log para exibir no terminal como é demonstrada a localização sendo pesquisada.*/
    response.sendFile(__dirname + "/index.html");  
});


app.post("/", function(request, response){
    let num1 = Number(request.body.num1);
    let num2 = Number(request.body.num2);
    let soma = num1 + num2;
    response.send(`O resultado de ${num1} + ${num2} é : ${soma}`);
});


app.listen(port, function(){
    console.log(`Server started on port ${port}`);
});



