## ANOTAÇÕES GERAIS / OmniStack11

----
### ROTAS / Recursos

### METODOS HTTP

* GET: Buscar alguma informação do backend
* POST: Criar uma informação no backend
* PUT: ALterar informação no backend
* DELETE: Deletar informação no backend

### TIPOS DE PARAMETROS (pars): 

* QUERY: Parametros nomeados enviados na rota apos o ? (Ex.: ?param=txt&pag=1)
* ROUTE: Parametros utilizados para identificar recursos (EX.: /users/:id --> /users/1)
* REQUEST BODY: Corpo da requisição usado para criar/alterar recursos

### BANCO DE DADOS

##### Bancos (SQL) Exemplos: 
* MySQL
* sQLite *
* PostgreeSQL
* Oracle
* MS SQL Server

##### Bancos (NoSQL) Exemplos: 
* MongoDB
* CouchDB
* Firebase
* etc...


#### DRIVER de Comunicação: Quem vai "falar com o DB"
###### EXEMPLO (query): 
    SELECT \* FROM users;

###### EXEMPLO (Query Builder):
    table('users').select('*').where().

>  KNEX (QUery builder)


----
## Changelog (of this Notes)
* 2020-03-31 Updated after AULA#2
