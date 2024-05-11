const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize, models) => {
    class DocKeyword extends Model {
        static associate () {
            const { DocText, Keyword } = models
            DocKeyword.belongsTo(Keyword)
            DocKeyword.belongsTo(DocText)
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