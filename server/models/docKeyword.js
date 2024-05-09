const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize, models) => {
    class DocKeyword extends Model {
        static associate () {
            const { DocText, Keyword } = models
            DocKeyword.belongsTo(Keyword, {as: 'DocKeywordId'})
            DocKeyword.belongsTo(DocText, {as: 'DocId'})
        }
    }

    DocKeyword.init({
        heading: DataTypes.STRING
    },
    {
        sequelize,
        modelName: 'DocKeyword',
        timestamps: false
    })

    return DocKeyword
}