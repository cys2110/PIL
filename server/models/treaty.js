const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize, models) => {
    class Treaty extends Model {
        static associate () {
            const { TreatyText, TreatyParties, Country, Court, Document } = models
            Treaty.hasOne(TreatyText)
            Treaty.belongsToMany(Country, {as: 'TreatyCountry', through: TreatyParties})
            Treaty.hasMany(TreatyParties, {as: 'PartytoTreaty'})
            Treaty.hasOne(Court)
            Treaty.belongsToMany(Document, {as: 'TreatyCite', through: 'TreatyCites'})
        }
    }

    Treaty.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sig_date: DataTypes.DATEONLY,
        effective_date: DataTypes.DATEONLY,
        location_signed: DataTypes.STRING,
        link: DataTypes.STRING,
        cite: DataTypes.STRING
    },
    {
        sequelize,
        modelName: 'Treaty',
        timestamps: false
    })

    return Treaty
}