const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize, models) => {
    class Document extends Model {
        static associate () {
            const { Paragraph, IcjCase } = models
            Document.hasMany(Paragraph)
            Document.belongsTo(IcjCase)
        }
    }

    Document.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: DataTypes.STRING,
        date: DataTypes.DATEONLY,
        language: DataTypes.STRING,
        subjects: DataTypes.ARRAY(DataTypes.STRING),
        link: DataTypes.STRING,
        judges: DataTypes.ARRAY(DataTypes.STRING),
        cite: DataTypes.STRING
    },
    {
        sequelize,
        modelName: 'Document'
    })

    return Document
}