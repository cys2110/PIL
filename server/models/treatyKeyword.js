const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize, models) => {
    class TreatyKeyword extends Model {
        static associate () {
            const { TreatyText, Keyword } = models
            TreatyKeyword.belongsTo(Keyword)
            TreatyKeyword.belongsTo(TreatyText)
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