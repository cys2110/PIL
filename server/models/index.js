const Sequelize = require('sequelize')
const dotenv = require('dotenv')
dotenv.config()

const sequelize = new Sequelize(process.env.DB, process.env.USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: process.env.dialect
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.Annotation = require('./annotation')(sequelize, db)
db.Document = require('./document')(sequelize, db)
db.IcjCase = require('./icjCase')(sequelize, db)
db.Paragraph = require('./paragraph')(sequelize, db)
db.User = require('./user')(sequelize, db)

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

module.exports = db