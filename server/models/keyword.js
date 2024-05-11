const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize, models) => {
    class Keyword extends Model {
        static associate () {
            const { Treaty, Document } = models
            Keyword.belongsToMany(Treaty, {through: 'TreatyKeyword'})
            Keyword.belongsToMany(Document, {through: 'DocKeyword'})
        }
    }

    Keyword.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        keyword: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'Keyword',
        timestamps: false
    })

    return Keyword
}