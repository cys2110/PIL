const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize, models) => {
    class Keyword extends Model {
        static associate () {
            const { TreatyText, DocText } = models
            Keyword.belongsToMany(TreatyText, { through: 'TreatyKeyword'})
            Keyword.belongsToMany(DocText, {through: 'DocKeyword'})
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
        modelName: 'Keyword'
    })

    return Keyword
}