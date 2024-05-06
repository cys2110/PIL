const { DataTypes, Model } = require('sequelize')

module.exports = (sequelize, models) => {
    class Annotation extends Model {
        static associate () {
            const { Paragraph, User } = models
            Annotation.belongsTo(Paragraph)
            Annotation.belongsTo(User)
        }
    }

    Annotation.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        text: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'Annotation'
    })

    return Annotation
}