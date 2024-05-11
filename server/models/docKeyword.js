const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize, models) => {
    class DocKeyword extends Model {
        static associate () {
            const { Document, Keyword } = models
            DocKeyword.belongsTo(Keyword)
            DocKeyword.belongsTo(Document)
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