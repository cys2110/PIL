const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize, models) => {
    class Subject extends Model {
        static associate () {
            const { Case } = models
            Subject.belongsToMany(Case, {through: 'CaseSubject'})
        }
    }

    Subject.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        subject: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'Subject',
        timestamps: false
    })

    return Subject
}