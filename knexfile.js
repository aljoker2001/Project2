module.exports = {
  client: 'mysql',
  connection: {
    host: 'localhost',
    port: 3306,
    user: 'nodeUser',
    password: '',
    database: 'soccer_db',
    debug: ['ComQueryPacket', 'RowDataPacket']
  },
  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      port: 3306,
      user: 'nodeUser',
      password: '',
      database: 'soccer_db',
      debug: ['ComQueryPacket', 'RowDataPacket']
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      port: 3306,
      user: 'nodeUser',
      password: '',
      database: 'soccer_db',
      debug: ['ComQueryPacket', 'RowDataPacket']
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host: process.env.DATABASE_URL,
      port: 3306,
      user: 'nodeUser',
      password: '',
      database: 'soccer_db'
    }
  }
}
