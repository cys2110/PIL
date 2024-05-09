const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize, models) => {
    class Keyword extends Model {
        static associate () {
            const { TreatyText, DocText, TreatyKeyword, DocKeyword } = models
            Keyword.belongsToMany(TreatyText, {as: 'KeywordInTreaty', through: TreatyKeyword})
            Keyword.hasMany(TreatyKeyword, {as: 'TreatyKeywordId'})
            Keyword.belongsToMany(DocText, {as: 'KeywordinDoc',through: DocKeyword})
            Keyword.hasMany(DocKeyword, {as: 'DocKeywordId'})
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