const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize, models) => {
    class Country extends Model {
        static associate () {
            const { Treaty, TreatyParties, Case, CaseParty } = models
            Country.belongsToMany(Treaty, {as: 'Party', through: TreatyParties})
            Country.hasMany(TreatyParties, {as: 'TreatyParty'})
            Country.belongsToMany(Case, {through: CaseParty})
            Country.hasMany(CaseParty)
        }
    }

    Country.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'Country'
    })

    return Country
}