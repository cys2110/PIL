const { DataTypes, Model, DATE } = require('sequelize')

module.exports = (sequelize, models) => {
    class IcjCase extends Model {
        static associate () {
            const { Document } = models
            IcjCase.hasMany(Document)
        }
    }

    IcjCase.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        gen_list: DataTypes.INTEGER,
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        introduction: DataTypes.INTEGER,
        culmination: DataTypes.INTEGER,
        type: DataTypes.ENUM('Advisory', 'Contentious'),
        applicant: DataTypes.STRING,
        respondent: DataTypes.STRING
    },
    {
        sequelize,
        modelName: 'IcjCase'
    })

    return IcjCase
}