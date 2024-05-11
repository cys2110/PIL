const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize, models) => {
    class DocText extends Model {
        static associate () {
            const { Document, Keyword, DocKeyword } = models
            DocText.belongsTo(Document)
            DocText.belongsToMany(Keyword, {as: 'DocsKeyword', through: DocKeyword})
            DocText.hasMany(DocKeyword)
        }
    }

    DocText.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        md_text: DataTypes.TEXT,
        plain_text: DataTypes.TEXT,
    },
    {
        sequelize,
        modelName: 'DocText',
        timestamps: false
    })

    return DocText
}