const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize, models) => {
    class TreatyParties extends Model {
        static associate () {
            const { Treaty, Country } = models
            TreatyParties.belongsTo(Country)
            TreatyParties.belongsTo(Treaty)
        }
    }

    TreatyParties.init({
        signature_date: DataTypes.DATEONLY,
        ratification_date: DataTypes.DATEONLY,
        withdrawal_date: DataTypes.DATEONLY,
        declaration: DataTypes.TEXT,
        reservation: DataTypes.TEXT
    },
    {
        sequelize,
        modelName: 'TreatyParties',
        timestamps: false
    })

    return TreatyParties
}