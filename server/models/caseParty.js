const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize, models) => {
    class CaseParty extends Model {
        static associate () {
            const { Case, State } = models
            CaseParty.belongsTo(State)
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