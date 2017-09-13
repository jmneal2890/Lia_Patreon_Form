module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'patreon signup',
    name: process.env.DB_USER || 'patreon signup',
    email: process.env.DB_EMAIL || 'patreon signup',
    pledge: process.env.DB_PLEDGE || 'patreon signup',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './Lia_Patreon_Form.sqlite'
    }
  }
}
