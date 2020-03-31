
# ROTAS / Recursos


# METODOS HTTP

 GET: Buscar alguma informação do backend
 POST: Criar uma informação no backedn
 PUT: ALterar informação no backend
 DELETE: Deletar informação no backend

# TIPOS DE PARAMETROS: 

 QUERY: Parametros nomeados enviados na rota apos o ? (Ex.: ?param=txt&pag=1)
 ROUTE: Parametros utilizados para identificar recursos (EX.: /users/:id --> /users/1)
 REQUEST BODY: Corpo da requisição usado para criar/alterar recursos

# BANCO DE DADOS

 SQL: MySQL, sQLite, PostgreeSQL, Oracle, MS SQL Server
 NoSQL: MongoDB, CouchDB, etc.


# DRIVER : SELECT * FROM users;
 Query Builder: table('users').select('*').where()...
        KNEX (QUery builder)
