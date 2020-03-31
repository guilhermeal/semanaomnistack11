// IMPORTO A LIB express INSTALADA NO NODE_MODULES
const express = require('express');

const cors = require('cors');

//IMPORTA O ARQUIVO DE ROTAS
const routes = require('./routes');

// INSTANCIO MEU APLCICATIVO - QUE USARA ROTAS EXPRESS
const app = express();

app.use(cors());


// NODE INTERPRETAR AS TRANSACOES COMO JSON
app.use(express.json());

// DEFINE AS ROTAS DE ROUTES no APP
app.use(routes);




// DEFINICAO DA PORTA LISTEN
app.listen(3333); 