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
        md_text: DataTypes.TEXT,
        plain_text: DataTypes.TEXT,
        centred: DataTypes.BOOLEAN,
        capitalised: DataTypes.BOOLEAN,
        bold: DataTypes.BOOLEAN,
        italicised: DataTypes.BOOLEAN
    },
    {
        sequelize,
        modelName: 'TreatyText'
    })

    return TreatyText
}