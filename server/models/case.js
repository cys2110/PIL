const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize, models) => {
    class Case extends Model {
        static associate () {
            const { State, CaseParty, Court, Document, Subject } = models
            Case.belongsToMany(State, {through: CaseParty})
            Case.hasMany(CaseParty)
            Case.belongsTo(Court)
            Case.hasMany(Document)
            Case.belongsToMany(Subject, {through: 'CaseSubject'})
        }
    }

    Case.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        case_no: DataTypes.STRING,
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        instituted: DataTypes.DATEONLY,
        culmination: DataTypes.DATEONLY,
        case_type: DataTypes.STRING,
        nonState_apps: DataTypes.ARRAY(DataTypes.STRING)
    },
    {
        sequelize,
        modelName: 'Case',
        timestamps: false
    })

    return Case
}