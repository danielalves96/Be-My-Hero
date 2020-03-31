/**
 * Métodos HTTP
 * 
 * GET: Buscar uma informação no back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Delete uma informação do back-end
 */

 /**
  * Tipos de parâmetros
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
  * Route Params: Parâmentros utilizados para identificar recursos
  * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
  */


//importa as funcionalidades do express.
const express = require('express');

// variável que armazena a aplicação (rotas, funcionalidades).
const app = express();

//importa do arquivo de rotas
const routes = require('./routes');

const cors = require('cors');

//transforma os json recebido em algo entendível pela app
app.use(cors());
app.use(express.json());
app.use(routes);


//aplicação ouvir a porta 3333.
app.listen(3333);
