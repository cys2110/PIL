const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize, models) => {
    class Document extends Model {
        static associate () {
            const { DocType, Case, Judge, Treaty, DocText } = models
            Document.belongsTo(DocType)
            Document.belongsTo(Case)
            Document.hasOne(DocText)
            Document.belongsToMany(Judge, {through: 'DocJudge'})
            Document.belongsToMany(Document, {as: 'DocumentCite', through: 'DocCites'})
            Document.belongsToMany(Treaty, {as: 'TreatyCite', through: 'TreatyCites'} )
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
        modelName: 'Document',
        timestamps: false
    })

    return Document
}