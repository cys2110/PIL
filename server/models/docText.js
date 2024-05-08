const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize, models) => {
    class DocText extends Model {
        static associate () {
            const { Document, Treaty, Keyword, DocFn } = models
            DocText.belongsTo(Document, {as: 'DocumentText'})
            DocText.belongsToMany(Treaty, {through: 'DocTreaty'})
            DocText.belongsToMany(Keyword, {through: 'DocKeyword'})
            DocText.hasMany(DocFn)
            DocText.belongsToMany(Document, {as: 'Cites', through: 'DocCite'})
        }
    }

    DocText.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        paragraph_no: DataTypes.INTEGER,
        md_text: DataTypes.TEXT,
        plain_text: DataTypes.TEXT,
        quote: DataTypes.BOOLEAN,
        centred: DataTypes.BOOLEAN,
        bold: DataTypes.BOOLEAN,
        italicised: DataTypes.BOOLEAN
    },
    {
        sequelize,
        modelName: 'DocText'
    })

    return DocText
}