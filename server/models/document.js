const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize, models) => {
    class Document extends Model {
        static associate () {
            const { DocType, Case, Judge, Treaty, DocJudge, Keyword } = models
            Document.belongsTo(DocType)
            Document.belongsTo(Case)
            Document.belongsToMany(Judge, {through: DocJudge})
            Document.hasMany(DocJudge)
            Document.belongsToMany(Document, {as: 'DocumentCites', through: 'DocCites'})
            Document.belongsToMany(Treaty, {through: 'TreatyCites'} )
            Document.belongsToMany(Keyword, {through: 'DocKeyword'})
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
        conclusions: DataTypes.ARRAY(DataTypes.TEXT),
        text: DataTypes.TEXT
    },
    {
        sequelize,
        modelName: 'Document',
        timestamps: false
    })

    return Document
}