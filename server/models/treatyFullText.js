const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize, models) => {
    class TreatyFullText extends Model {
        static associate () {
            const { Treaty } = models
            TreatyFullText.belongsTo(Treaty)
        }
    }

    TreatyFullText.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        text: DataTypes.TEXT
    },
    {
        sequelize,
        modelName: 'TreatyFullText'
    })

    return TreatyFullText
}