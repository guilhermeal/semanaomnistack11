// IMPORTO A LIB express INSTALADA NO NODE_MODULES
const express = require('express');

// INSTANCIO MEU APLCICATIVO - QUE USARA ROTAS EXPRESS
const app = express();

// DEFINDO A ROTA "RAIZ / PADRAO" COMO /
app.get('/', (request, response) => {

    // PODE SER RETORNADO TEXTOS  A PARTIR DO NODE, MAS O RECOMENDADO É RETORNAR JSONS
    // return response.send('Hello Galera!');
    return response.json({
        evento: 'Semana omnistack 11.0',
        aluno: "Guilherme AL"
    });
    
});

// DEFINICAO DA PORTA LISTEN
app.listen(3333); 