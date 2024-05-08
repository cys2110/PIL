const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize, models) => {
    class DocType extends Model {
        static associate () {
            const { Document } = models
            DocType.hasMany(Document)
        }
    }

    DocType.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        docType: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'DocType'
    })

    return DocType
}