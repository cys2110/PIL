const Sequelize = require('sequelize')
const dotenv = require('dotenv')
dotenv.config()

const sequelize = new Sequelize(process.env.DB, process.env.DB_USER, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: process.env.dialect
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.Case = require('./case')(sequelize, db)
db.CaseParty = require('./caseParty')(sequelize, db)
db.State = require('./state')(sequelize, db)
db.Court = require('./court')(sequelize, db)
db.Document = require('./document')(sequelize, db)
db.DocJudge = require('./docJudge')(sequelize, db)
db.DocType = require('./docType')(sequelize, db)
db.Judge = require('./judge')(sequelize, db)
db.Keyword = require('./keyword')(sequelize, db)
db.Subject = require('./subject')(sequelize, db)
db.Treaty = require('./treaty')(sequelize, db)
db.TreatyParties = require('./treatyParties')(sequelize, db)

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

module.exports = db