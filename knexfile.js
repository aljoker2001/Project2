// Update with your config settings.

module.exports = {
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
      database: 'test_db',
      debug: ['ComQueryPacket', 'RowDataPacket']
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      host: process.env.DATABASE_URL,
      port: 3306,
      user: 'nodeUser',
      password: '',
      database: 'soccer_db'
    }
  }

}
