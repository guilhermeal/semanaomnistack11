// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};


/**
 * EXEMPLO:
 * 
 * ENTIDADES - Seriam tabelas de cadastro:
 *  - ONG
 *  - Casos (incident)
 * 
 * FUNCIONALIDADE - Ações que serao executadas:
 *  - Login
 *  - Logou
 *  - Cadastro
 *  - Cadastrar casos
 *  - Listar casos
 *  - Deletar casos especificos de uma ong
 *  - Listar todos os casos
 *  - Entrar em contato com a ONG
 * 
 */