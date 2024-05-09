const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize, models) => {
    class CaseParty extends Model {
        static associate () {
            const { Case, Country } = models
            CaseParty.belongsTo(Country)
            CaseParty.belongsTo(Case)
        }
    }

    CaseParty.init({
        role: DataTypes.ENUM('Applicant', 'Respondent')
    },
    {
        sequelize,
        modelName: 'CaseParty',
        timestamps: false
    })

    return CaseParty
}