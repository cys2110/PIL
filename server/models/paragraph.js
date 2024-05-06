const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize, models) => {
    class Paragraph extends Model {
        static associate () {
            const { Document, Annotation } = models
            Paragraph.belongsTo(Document)
            Paragraph.hasMany(Annotation)
        }
    }

    Paragraph.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        paragraph_no: DataTypes.INTEGER,
        text: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        tags: DataTypes.ARRAY(DataTypes.STRING)
    },
    {
        sequelize,
        modelName: 'Paragraph'
    })

    return Paragraph
}