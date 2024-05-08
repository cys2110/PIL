const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize, models) => {
    class Document extends Model {
        static associate () {
            const { DocType, Case, DocText, Judge, DocJudge } = models
            Document.belongsTo(DocType)
            Document.belongsTo(Case)
            Document.hasMany(DocText, {as: 'DocumentText'})
            Document.belongsToMany(Judge, {through: 'DocJudge'})
            Document.belongsToMany(DocText, {as: 'Cites', through: 'DocCite'})
        }
    }

    Document.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: DataTypes.DATEONLY,
        cite: DataTypes.STRING,
        link: DataTypes.STRING,
        conclusions: DataTypes.ARRAY(DataTypes.STRING)
    },
    {
        sequelize,
        modelName: 'Document'
    })

    return Document
}