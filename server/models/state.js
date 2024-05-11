const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize, models) => {
    class State extends Model {
        static associate () {
            const { Treaty, TreatyParties, Case, CaseParty } = models
            State.belongsToMany(Treaty, {through: TreatyParties})
            State.hasMany(TreatyParties)
            State.belongsToMany(Case, {through: CaseParty})
            State.hasMany(CaseParty)
        }
    }

    State.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        short_name: DataTypes.STRING,
        off_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        formerly: DataTypes.ARRAY(DataTypes.STRING)
    },
    {
        sequelize,
        modelName: 'State'
    })

    return State
}