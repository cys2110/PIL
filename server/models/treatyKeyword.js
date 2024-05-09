const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize, models) => {
    class TreatyKeyword extends Model {
        static associate () {
            const { TreatyText, Keyword } = models
            TreatyKeyword.belongsTo(Keyword, {as: 'TreatyKeywordId'})
            TreatyKeyword.belongsTo(TreatyText, {as: 'KeywordTreatyId'})
        }
    }

    TreatyKeyword.init({
        heading: DataTypes.STRING
    },
    {
        sequelize,
        modelName: 'TreatyKeyword',
        timestamps: false
    })

    return TreatyKeyword
}