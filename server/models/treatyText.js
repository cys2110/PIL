const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize, models) => {
    class TreatyText extends Model {
        static associate () {
            const { Treaty, Keyword } = models
            TreatyText.belongsTo(Treaty)
            TreatyText.belongsToMany(Keyword, {through: 'TreatyKeyword'})
        }
    }

    TreatyText.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        text: DataTypes.TEXT,
    },
    {
        sequelize,
        modelName: 'TreatyText'
    })

    return TreatyText
}