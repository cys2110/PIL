const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize, models) => {
    class Court extends Model {
        static associate () {
            const { Case, Treaty } = models
            Court.belongsTo(Treaty)
            Court.hasMany(Case)
        }
    }

    Court.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        abbr: DataTypes.STRING,
        established: DataTypes.INTEGER,
        abolished: DataTypes.INTEGER,
        jx: DataTypes.STRING,
        seat: DataTypes.STRING
    },
    {
        sequelize,
        modelName: 'Court',
        timestamps: false
    })

    return Court
}