const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize, models) => {
    class Judge extends Model {
        static associate () {
            const { Document } = models
            Judge.belongsToMany(Document, {through: 'DocJudge'})
        }
    }

    Judge.init({
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
        modelName: 'Judge'
    })

    return Judge
}