require('dotenv').config()
module.exports = {
  development: {
    database: 'fantasy_soccer_development',
    dialect: 'postgres'
  },
  test: {
    database: 'fantasy_soccer_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
