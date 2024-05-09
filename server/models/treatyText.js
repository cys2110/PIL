const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize, models) => {
    class TreatyText extends Model {
        static associate () {
            const { Treaty, Keyword, TreatyKeyword } = models
            TreatyText.belongsTo(Treaty)
            TreatyText.belongsToMany(Keyword, {as: 'TreatysKeyword', through: TreatyKeyword})
            TreatyText.hasMany(TreatyKeyword, {as: 'KeywordTreatyId'})
        }
    }

    TreatyText.init({
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
        modelName: 'TreatyText',
        timestamps: false
    })

    return TreatyText
}