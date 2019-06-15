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
      database: 'testdb',
      debug: ['ComQueryPacket', 'RowDataPacket']
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host: 'u0zbt18wwjva9e0v.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
      port: 3306,
      user: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE
    }
  }

}
